
// get all questions
export async function getQuestions(req, res){
    res.json("question api get request inside controllers");
}

// insert all questions
export async function insertQuestions(req, res){
    res.json("question inside insert questions")
}

// delete all questions
export async function deleteQuestions(req, res){
    res.json("delete questions")
}

// get all result
export async function getResult(req, res){
    res.json("result api get request")
}

// post all result
export async function storeResult(req, res){
    res.json("result post")
}

// delete all result
export async function deleteResult(req, res){
    res.json("inside delete question api")
}