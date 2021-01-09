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
                res.status(200).send({message: "success", content: schedule.daytime})
                /*
                var sydata = []
                const courseIds = schedule.CourseId
                Syllabus.find({'CourseId':{$in: courseIds}})
                       .exec((err, syllabusdata) => {
                            console.log(syllabusdata)
                            sydata = syllabusdata
                            var data = ({ 
                                 datime:  schedule.daytime,
                                 syllabus: sydata
                            })
                        })*/
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
               const classroom = syllabus.ClsRom
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
                        var course = { 
                            courseId: courseId,
                            time: [],
                            place: classroom
                        }
                        var coursetime = []
                        for(var i = 0; i < 6 * 14; i++) {
                            let start = -1
                            let len = 0
                            while (i < (6 * 14) && time[i] === '1') {
                                if (start === -1) {
                                    start = i
                                }
                                len++
                                i++ 
                            }
                            if (start > 0) {
                                coursetime.push([start, len])
                            }
                        }
                        course.time = coursetime
                        console.log(course)
                        schedule.daytime.push(course)
                        console.log(schedule.daytime)
                        /*
                        schedule.daytime.map( function(value, index){
                            if (time[index] === '1') {
                                value.push(coursename)
                                schedule.daytime.set(index, value)
                            }
                        })*/
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
                     const found = schedule.CourseId.find(e => e === courseId)
                     if (found !== undefined) {
                        schedule.CourseId.map( function(id, index) {
                            if (id === courseId) {
                                schedule.CourseId.splice(index, 1)
                            }
                        })
                        for (var i = 0; i < schedule.daytime.length; i++) {
                            if (schedule.daytime[i].courseId === courseId) {
                                schedule.daytime.splice(i, 1)
                            }
                        }
                        console.log(schedule.daytime)
                         /*
                        schedule.daytime.map( function(value, index){
                            if (time[index] === '1') {
                                value.map( function(name, index) {
                                   if (name === coursename) {
                                        value.splice(index, 1)
                                   }
                                })
                                schedule.daytime.set(index, value)
                            }
                        })*/
                        schedule.save() 
                        res.status(200).send({message: "success", content: schedule})
                     } else {
                        res.status(400).send({message: "error course do not exists"})
                     }
                 })

    });
    

});

export default router
