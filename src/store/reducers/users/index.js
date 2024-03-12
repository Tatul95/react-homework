import { type } from "@testing-library/user-event/dist/type"

const initialState = {
    userList:[]
}

// action  {}
//   type, payload

function userReducer(state=initialState, action){

    switch(action.type){
      case 'ADD_USER':{
        console.log(action);

        state.userList = [...state.userList,action.payload]
        return {...state}
      }
      default:{
        return state
      }

      
    }

}
export default userReducer

