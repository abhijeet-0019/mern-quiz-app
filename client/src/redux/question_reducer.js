import { createSlice } from "@reduxjs/toolkit"

export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],      //for storing questions
        answers: [],    // for storing answers
        trace: 0        // for tracking question number
    },
    reducers : {
        startExamAction: (state, action) => {
            return {
                ...state,
                queue : action.payload
            }
        },
        moveNextAction: (state)=> {
            return {
                ...state, 
                trace: state.trace + 1
            }
        },
        movePrevAction: (state)=> {
            return {
                ...state, 
                trace: state.trace - 1
            }
        },
    }
})

export const {startExamAction, moveNextAction, movePrevAction} = questionReducer.actions;

export default questionReducer.reducer;