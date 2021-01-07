import express from 'express'
import CourseInform from '../models/obj_field/course_info'

const router = express.Router()

router.get('/', function(req, res, next){
    let year = req.query.year
    let courseId = req.query.courseId
    console.log(`course infrom courseId ${courseId}`)
    if (year && courseId) {
        CourseInform.find()
                    //.where('year').equals(year)
                    .where('CourseId').equals(courseId)
                    .limit(5) 
                    .exec((err, ress) => {
                        if (err) {
                            console.log('Course ${year} ${courseId} not found')
                            res.status(403).send({message: 'error', content: []})
                        } else {
                            res.status(200).send({message: 'success', content: ress})
                        }
                    }) 
    } else {
        console.log(`missing year or courseId`)
    }

})

export default router 
