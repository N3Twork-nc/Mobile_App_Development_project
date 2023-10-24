import {createSlice} from "@reduxjs/toolkit"

infoUser=createSlice({
    name:"infoUser",
    initialState:{
        "username":"",
        "password":"",
        "email":"",
        "fullname":""
    },
    reducers:{
        updateAll(state,data){
            state=data.payload
            console.log(state)
            return state
        }
    }
})

export const {actions,reducer} =infoUser
export const {updateAll}=actions
export default reducer