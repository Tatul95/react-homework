import { combineReducers, createStore } from "redux"
import userReducer from "./reducers/users"

const combineReducersCustom = combineReducers({
    user: userReducer
})


export const store = createStore(combineReducersCustom)

//  store =  {}
/**
 * store {
 *  user:{
 *      userList:[]
 * }
 *  
 * }
 * 
 * **/  

