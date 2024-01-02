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
    reducers: {
        updateDataMyPlant(state, data) {
            return data.payload;
        },
        updateQuantity(state, data) {
            const { 'Phòng khách': livingroom, 'Nhà bếp': kitchen, 'Sân vườn': garden, 'Phòng ngủ': bedroom } = data.payload;

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
            }
        },
        updateLivingRoomData(state, data) {
            return {
                ...state,
                'Phòng khách': {
                    ...state['Phòng khách'],
                    'Data': data.payload, 
                }
            }
        },
        updateKitchenData(state, data) {
            return {
                ...state,
                'Nhà bếp': {
                    ...state['Nhà bếp'],
                    'Data': data.payload, 
                }
            }
        },
        updateBedroomData(state, data) {
            return {
                ...state,
                'Phòng ngủ': {
                    ...state['Phòng ngủ'],
                    'Data': data.payload, 
                }
            }
        },
        updateBackyardData(state, data) {
            return {
                ...state,
                'Sân vườn': {
                    ...state['Sân vườn'],
                    'Data': data.payload, 
                }
            }
        },
    }
})

export const { actions, reducer } = plantsReducer
export const { updateDataMyPlant, updateQuantity, updateLivingRoomData, updateKitchenData, updateBedroomData, updateBackyardData } = actions
export default reducer