import express from 'express'
import Account from '../models/account'
import bcrypt from 'bcrypt'
const Student =  require('../models/student')
const router = express.Router()
// const bcrypt = require('bcrypt')

const hash_time = 10


router.post('/login', async (req, res) => {
    console.log("login")
    console.log(req.body)
    let sess = req.session
    console.log("-------> ", req.session.loginUser)
    if (req.session.loginUser === true) {
        console.log('--- already login!!')
        res.status(200).send({message: "success"})
        return;
    }

    Account.find()
           .where('StudId').equals(req.body.studentId)
           .limit(5)
           .exec(async (err, ress) => {
                if (err) {
                    res.status(400).send({error: "username or password error"})
                } else {
                    console.log('login user',ress)
                    if (ress.length > 0) {
                        const compare = await bcrypt.compare(req.body.password, ress[0].StudPwd)
                        if (compare === true) {

                            req.session.loginUser = true
                            req.session.loginUserId = req.body.studentId 
                            res.status(200).send({message: "success"})
                        } else {
                            res.status(400).send({error: "username or password error"})
                        }
                    } else {
                        res.status(400).send({error: "username or password error"})
                    }
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
            console.log("result ", doc)
            if(doc === false) {
                const user = new Account ({
                    StudId: req.body.studentId,
                    StudEmail: req.body.email,
                    UserNam: req.body.username,
                    StudPwd: bcrypt.hashSync(req.body.password, hash_time)
                } )
                const student = new Student ({
                    StudId: req.body.studentId,
                    StudMaj : req.body.studentMaj,
                    StudGrad: req.body.studentGrad,
                    StudGend: req.body.studentGender,
                    StudDept: req.body.studentDepartment,
                    StudCname: req.body.studentCname,
                    StudEname: req.body.studentEname
                })
                user.save((err, res) => {
                    if (err) throw err
                    console.log('save user')
                })
                student.save((err, res) => {
                    if (err) throw err
                    console.log('save student')
                })
                res.status(200).send({message: "Success"})

            } else {
                res.status(400).end("username exists")
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
