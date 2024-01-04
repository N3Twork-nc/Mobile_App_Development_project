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
        'Lưu trữ':{
            'Count':0,
            "Data":"",
        },
    },
    reducers: {
        updateDataMyPlant(state,data) {
            const roomName=Object.keys(data.payload)[0]
            const value=data.payload[roomName]
            return {
                ...state,
                [roomName]:{
                    ...state[roomName],
                    'Data':value
                }
            }
        },
        updateQuantity(state, data) {
            const { 'Phòng khách': livingroom, 'Nhà bếp': kitchen, 'Sân vườn': garden, 'Phòng ngủ': bedroom, 'Lưu trữ': saved } = data.payload;

            return {
                ...state,
                'Phòng khách': {
                    ...state['Phòng khách'],
                    'Count': livingroom, 
                },
                'Phòng ngủ': {
                    ...state['Phòng ngủ'],
                    'Count': bedroom,
                },
                'Nhà bếp': {
                    ...state['Nhà bếp'],
                    'Count': kitchen,
                },
                'Sân vườn': {
                    ...state['Sân vườn'],
                    'Count': garden,
                },
                'Lưu trữ': {
                    ...state['Lưu trữ'],
                    'Count': saved,
                },
            }
        },
        deleteMyPlant(state,data){
            const roomName=data.payload["roomName"]
            const idPlant=data.payload['idPlant']
            const count=state[roomName]['Count']
            console.log(state)
            delete state[roomName]["Data"][idPlant]
            state[roomName]["Count"]=count-1
            return state
        },
        addMyPlant(state,data){
            const roomName=data.payload
            const count=state[roomName]["Count"]
            return {
                ...state,
                [roomName]:{
                    ...state[roomName],
                    "Count":count+1,
                }
            }
        }
    }
})

export const { actions, reducer } = plantsReducer
export const { updateDataMyPlant, updateQuantity,deleteMyPlant,addMyPlant } = actions
export default reducer