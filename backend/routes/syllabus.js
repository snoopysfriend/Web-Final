import express from 'express'
import Syllabus from '../models/course'

const router = express.Router()

router.get('/', function(req, res, next){
    let type = req.query.type
    let year = req.query.year
    console.log(`Syllabus year ${year} type ${type}`)
    Syllabus.find()
            //.where('year').equals(year)
           // .where('type').equals(type)
            .where('DptCode').equals(9010)
            .limit(5)
            .exec((err, ress) => {
                if (err) {
                    console.log(`Syllabus year ${year} type ${type} not found`)
                    res.status(403).send({message: "error", content: null})
                } else {
                    console.log(ress)
                    res.status(200).send({message: "success", content: ress})
                }
            }) 
})

export default router
