import {createSlice} from "@reduxjs/toolkit"

infoUser=createSlice({
    name:"infoUser",
    initialState:{
        "username":"",
        "password":"",
        "email":"",
        "fullname":"",
        "gender": "",
        "phoneNumber": "",
        "address": ""
    },
    reducers:{
        updateAll(state,data){
            state=data.payload
            return state
        }
    }
})

export const {actions,reducer} =infoUser
export const {updateAll}=actions
export default reducer