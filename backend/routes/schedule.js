import express from 'express'
import SelCourse from '../models/obj_field/selcourse'
import Syllabus from '../models/course' 
import Student from '../models/student' 

const router = express.Router()

router.get('/', function(req, res, next){
    const userId = req.session.loginUserId 
        
    if (req.session.loginUser === false) {
        res.status(400).send({message: "user login error"})
        return 
    }

    SelCourse.findOne()
             .where('StudId').equals(userId)
             .limit(5)
             .exec((err, schedule) => {
                //console.log(schedule)
                res.status(200).send({message: "success", content: schedule})
             })
});

router.post('/', function(req, res, next){
    const courseId = req.body.courseId; 
    const userId = req.session.loginUserId 
    console.log(`add new course ${courseId} to schedule`)

    if (req.session.loginUser === false) {
        res.status(400).send({message: "user login error"})
        return 
    }

    Syllabus.findOne({'CourseId': courseId})
            .exec((err, syllabus) => {
               //console.log(syllabus)
               const time = syllabus.newDayTime
               const coursename = syllabus.CouCname
               //console.log('time', time)
               SelCourse.findOne()
               .limit(5)
               .where('StudId').equals(userId)
               .exec((err, schedule) => {
                     //console.log(schedule)
                     const found = schedule.CourseId.find(e => e === courseId)
                     if (found !== undefined) {
                        res.status(400).send({message: "error course already exists"})
                     } else {
                        schedule.CourseId.push(courseId)
                        schedule.daytime.map( function(value, index){
                            if (time[index] === '1') {
                                value.push(coursename)
                                schedule.daytime.set(index, value)
                            }
                        })
                        schedule.save() 
                        res.status(200).send({message: "success", content: schedule})
                     }
                 })

    });
})

router.patch('/', function(req, res, next){
    const courseId = req.body.courseId; 
    const userId = req.session.loginUserId 

    console.log(`remove course ${courseId} from  schedule`)

    if (req.session.loginUser === false) {
        res.status(400).send({message: "user login error"})
        return 
    }

    Syllabus.findOne({'CourseId': courseId})
            .exec((err, syllabus) => {
               const time = syllabus.newDayTime
               const coursename = syllabus.CouCname
               SelCourse.findOne()
               .limit(5)
               .where('StudId').equals(userId)
               .exec((err, schedule) => {
                     //console.log(schedule)
                     const found = schedule.CourseId.find(e => e === courseId)
                     if (found !== undefined) {
                        schedule.CourseId.map( function(id, index) {
                            if (id === courseId) {
                                schedule.CourseId.splice(index, 1)
                            }
                        })
                        schedule.daytime.map( function(value, index){
                            if (time[index] === '1') {
                                value.map( function(name, index) {
                                   if (name === coursename) {
                                        value.splice(index, 1)
                                   }
                                })
                                schedule.daytime.set(index, value)
                            }
                        })
                        schedule.save() 
                        res.status(200).send({message: "success", content: schedule})
                     } else {
                        res.status(400).send({message: "error course do not exists"})
                     }
                 })

    });
    

});

export default router
