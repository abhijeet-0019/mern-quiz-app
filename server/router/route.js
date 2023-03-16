import { Router } from "express";
const router = Router();

// import controllers from
import * as controllers from '../controllers/controllers.js';


// question api routes

// router.get('/questions', controllers.getQuestions)
// router.post('/questions', controllers.insertQuestions) -----> these two are replaced by the below inline code

router.route('/questions')
    .get(controllers.getQuestions)  // GET Request
    .post(controllers.insertQuestions)  // POST Request
    .delete(controllers.deleteQuestions)

router.route('/result')
    .get(controllers.getResult)
    .post(controllers.storeResult)
    .delete(controllers.deleteResult)

export default router;