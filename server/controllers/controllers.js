import Questions from "../models/questionsSchema.js";
import Results from "../models/resultSchema.js";
import questions, {answers} from "../database/data.js"


// get all questions
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json(error)
    }
}

// insert all questions
export async function insertQuestions(req, res) {
    try {
        // Questions.insertMany({ questions: [questions], answers: [answers] }) or
        Questions.insertMany({ questions, answers })
        res.status(200).json({message: 'Questions saved successfully'})
    } catch (error) {
        res.json({ error })
    }
}  

// delete all questions
export async function deleteQuestions(req, res) {
    try{
        await Questions.deleteMany();
        res.json({msg: "deleted questions successfully...!"})
    }catch(error){
        res.json({error})
    }
}

// get all result
export async function getResult(req, res) {
    try{
        const r = await Results.find();
        res.json(r)
    }catch(error){
        res.json("error in post result")
    }
}

// post all result
export async function storeResult(req, res) {
    try{
        const {username, result, attempts, points, achived} = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        Results.create({username, result, attempts, points, achived})
        res.status(200).json({message: 'result saved successfully'})
    }catch(error){
        res.json({error})
    }
}

// delete all result
export async function deleteResult(req, res) {
    try{
        await Results.deleteMany();
        res.json({msg: "deleted results successfully...!"})
    }catch(error){
        res.json({error})
    }
}