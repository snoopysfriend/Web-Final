import express from 'express'
import CourseInform from '../models/course_info'

const router = express.Router()

router.get('/', function(req, res, next){
    const year = req.query.year
    const courseId = req.query.courseId
    console.log(`course infrom courseId ${courseId}`)
    if (year && courseId) {
        CourseInform.find()
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
