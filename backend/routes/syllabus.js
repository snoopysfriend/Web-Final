import express from 'express'
import Syllabus from '../models/course'
import {deptMj, libEd, acaProg, phyMil, genCour, depCode} from './filter_tags/index.js'

const router = express.Router()

router.post('/', function(req, res, next){
    let type = req.body.searchType
    let colleges = req.body.selectedDept
    let depts = req.body.selectedMajor
    let liberals = req.body.selectedLibEd
    let PEs = req.body.selectedPhyMil
    let langs = req.body.selectedGenCour
    let programs = req.body.selectedAcaProg

    //convert to codes
    var query =[]

    var queryDepts = []
    if (colleges !== undefined){
        colleges.forEach((col, index)=>{
            let isAllDepts = true
            depts.forEach((dept, jndex)=>{
                if (deptMj[col].indexOf(dept) >= 0){
                    isAllDepts = false
                    queryDepts.push(dept)   //covert to code
                }
            })
            if (isAllDepts){
                queryDepts = [...queryDepts, ...deptMj[col]]
            }
        })
    }
    queryDepts.forEach((dept, index)=>{
        if (depCode[dept] !== undefined)
        query.push(depCode[dept])
    })

    if (liberals !== undefined){
        liberals.forEach((lib, index)=>{
            query.push(lib.split(":")[0])
        })
    }
    var PEtable = {
        健康體適能: "PE",
        校隊班: "UniTeam",
        專項運動學群:"Prof_PE"
    }
    if (PEs !== undefined){
        PEs.forEach((pe, index)=>{
            query.push(PEtable[pe])
        })
    }

    var Langstable = {
        國文: "CH",
        英文: "EN",
    }
    if (langs !== undefined){
        langs.forEach((lang, index)=>{
            query.push(Langstable[lang])
        })
    }
    if (programs !== undefined){
        programs.forEach((prog, index)=>{
            query.push(prog.split(" ")[0])
        })
    }

    var queryParams = {};
    if (query.length > 0){
        queryParams = { Tags: { $in: query } }
        console.log(queryParams)
    }
    Syllabus.find(queryParams)
            .limit(200)
            .exec((err, ress) => {
                if (err) {
                    console.log(`Syllabus type ${type} not found`)
                    res.status(403).send({message: "error", content: null})
                } else {
                    // console.log(ress)
                    res.status(200).send({message: "success", content: ress})
                }
            }) 
})

export default router
