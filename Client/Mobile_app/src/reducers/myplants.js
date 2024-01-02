import {createSlice} from "@reduxjs/toolkit"

plantsReducer=createSlice({
    name:"Plant",
    initialState:{
        'Phòng khách':{
            'Count':0,
            "Data":"",
        },
        'Nhà bếp':{
            'Count':0,
            "Data":"",
        },
        'Phòng ngủ':{
            'Count':0,
            "Data":"",
        },
        'Sân vườn':{
            'Count':0,
            "Data":"",
        },
    },
    reducers:{
        updateDataMyPlant(state,data){
            return data.payload;
        },
        updateQuantity(state,data){
            livingroom=data.payload['Phòng khách']
            kitchen=data.payload['Nhà bếp']
            garden=data.payload['Sân vườn']
            bedroom=data.payload['Phòng ngủ']
            return {
                ...state,
                'Phòng khách': {
                  ...state['Phòng khách'],
                  'Count': livingroom
                },
                'Phòng ngủ': {
                  ...state['Phòng ngủ'],
                  'Count': bedroom
                },
                'Nhà bếp': {
                  ...state['Nhà bếp'],
                  'Count': kitchen
                },
                'Sân vườn':{
                    ...state['Sân vườn'],
                    'Count':garden
                }
            }
        }
    }
})

export const {actions,reducer} =plantsReducer
export const {updateDataMyPlant,updateQuantity}=actions
export default reducer