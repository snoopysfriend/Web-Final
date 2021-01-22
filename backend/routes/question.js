import express from 'express'
import Question from '../models/question'
import Answer from '../models/obj_field/answer'

const router = express.Router()

router.get('/', function(req, res, next){
    // TODO use ssession to get the user
    
    const courseId = req.query.courseId
    //const courseId = req.params.courseId
    console.log(`Query questions on courseId ${courseId}`)
    Question.find()
            .where('CourseId').equals(courseId)
            .limit()
            .exec((err, courses) => {
                if (err) {
                    console.log(err)
                    res.status(200).send({message: "error no such courses"})
                } else {
                    console.log(courses)
                    res.status(200).send({message: "success", content: courses})
                }
            })

});

router.post('/', function(req, res, next){
    // TODO use ssession to get the user
    const studentId = req.body.studentId;
    const courseId = req.body.courseId;
    const question = req.body.question;
    console.log(`new question on courseId ${courseId}`)
    //
    const newquestion = new Question ({
        QuCont: question,
        StudId: studentId,
        CourseId: courseId,
        Answer: []
    })
    newquestion.save((err, result) => {
        if (err) {
            res.status(400).send({message: "success"})
            return 
        } else {
            res.status(200).send({message: "success"})
        }
    })
});

router.patch('/', function(req, res, next){
    // TODO use ssession to get the user
    const studentId = req.body.studentId;
    const courseId = req.body.courseId;
    const questionId = req.body.questionId;
    const answer = req.body.answer;
    Question.findOne()
            .where("_id").equals(questionId)
            .exec((err, question) => {
                if (question === undefined) {
                    res.status(400).send({message: "error question not found"})
                } else {
                    console.log(question)
                    const newanswer = ({answer: answer})
                    question.Answer.push(newanswer)
                    //question.Answer = []
                    console.log(question)
                    question.save()
                    res.status(200).send({message: "success",})
                }
            })
});

router.patch('/answers', function(req, res, next){
    // TODO use ssession to get the user
    const studentId = req.body.studentId;
    const courseId = req.body.courseId;
    const questionId = req.body.questionId;
    const answerId = req.body.answerId;
    const rate = req.body.rate;
    console.log("pathing answer")
    Question.findOne()
            .where("_id").equals(questionId)
            .exec((err, question) => {
                if (question === undefined) {
                    res.status(400).send({message: "error question not found"})
                } else {
                    console.log(question.Answer)
                    console.log(answerId)
                    const index = question.Answer.findIndex(m => m._id == answerId)
                    var answer = question.Answer[index]
                    console.log(answer)
                    answer.rates.push({studentId: studentId, rate: rate})
                    question.Answer[index] = answer;
                    question.save();
                    res.status(200).send({message: "success"})
                }
            })
});


export default router
