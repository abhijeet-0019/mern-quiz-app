// using redux tool kit, creating a central storage for client react application
import {combineReducers, configureStore} from '@reduxjs/toolkit'

// call reducers
import questionReducer from './question_reducer'
import resultReducer from './result_reducer'


const rootReducer = combineReducers({
    questions: questionReducer,
    result: resultReducer
})

// create store with reducer
export default configureStore({ reducer : rootReducer})