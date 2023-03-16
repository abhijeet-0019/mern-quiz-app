import { Router } from "express";

const router = Router();


// question api routes
router.get('/questions', (req, res)=> {
    res.json("question api get request")
})


export default router;