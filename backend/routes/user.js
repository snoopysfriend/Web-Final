import express from 'express'
import Account from '../models/account'
import SelCourse from '../models/obj_field/selcourse'
const Student =  require('../models/student')
const router = express.Router()
const bcrypt = require('bcrypt')

const hash_time = 10


router.post('/login', async (req, res) => {
    console.log("logining")
    console.log(req.body)
    let sess = req.session
    console.log(sess)
    if (req.session.loginUser === true) {
        console.log('already login!!!')
        res.status(200).send({message: "success"})
        return ;
    }

    Account.find()
           .where('StudId').equals(req.body.studentId)
           .limit(5)
           .exec(async (err, ress) => {
                if (err) {
                    res.status(400).send({error: "username or password error"})
                    return 
                } 
                console.log('login user',ress)
                if (ress.length > 0) {
                    const compare = await bcrypt.compare(req.body.password, ress[0].StudPwd)
                    if (compare === true) {
                        req.session.loginUser = true
                        req.session.loginUserId = req.body.studentId 
                        console.log('success')
                        res.status(200).send({message: "success"})
                    } else {
                        res.status(400).send({error: "username or password error"})
                    }
                } else {
                    res.status(400).send({error: "username or password error"})
                }
           })
}) 

router.post('/register', (req, res) => {
    console.log('registering')
    console.log(req.body.studentId)
    Account.exists({StudId: req.body.studentId}, function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            if(doc === false) {
                const user = new Account ({
                    StudId: req.body.studentId,
                    StudEmail: req.body.email,
                    UserNam: req.body.username,
                    StudPwd: bcrypt.hashSync(req.body.password, hash_time)
                } )
                const selCourse = new SelCourse({
                    StudId: req.body.studentId,
                    daytime: [], 
                    CourseId: [],
                })
                //console.log(selCourse)
                const student = new Student ({
                    StudId: req.body.studentId,
                    StudMaj : req.body.studentMaj,
                    StudGrad: req.body.studentGrad,
                    StudGend: req.body.studentGender,
                    StudDept: req.body.studentDepartment,
                    StudCname: req.body.studentCname,
                    StudEname: req.body.studentEname,
                    SelCourse: selCourse._id,
                })
                //console.log(student)
                user.save((err, result) => {
                    console.log('saved user')
                    if (err) {
                        res.status(400).send({message: "username exists"}) 
                        return ;
                    }
                })
                student.save((err, result) => {
                    if (err) {
                        res.status(400).send({message: "username exists"})
                        return 
                    } else {
                        res.status(200).send({message: "Success"})
                    }
                })
                selCourse.save((err, result) => {
                    if (err) {
                        res.status(400).send({message: "username exists"})
                        return 
                    }
                })
            } else {
                res.status(400).send({message: "username exists"})
            }
        }
    })
}) 

router.post('/logout', (req, res, next) => {
    req.session.destroy(function(err) {
        if (err) {
            res.status(400).send({})// TODO
        }
        res.clearCookie();
        res.redirect('/')
    });
}) 



export default router
