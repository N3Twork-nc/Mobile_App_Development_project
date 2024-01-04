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
            "Data":""
        }
    },
    reducers: {
        addMyPlant(state,data) {
            const roomName=Object.keys(data.payload)[0]
            const value=data.payload[roomName]
            const count=Object.keys(value).length
            return {
                ...state,
                [roomName]:{
                    'Data':value,
                    "Count":count
                }
            }
        },
        updateAllPlants(state, data) {
            const dataLivingroom= data.payload.hasOwnProperty("Phòng khách") ? data.payload["Phòng khách"] :{};
            const countLivingroom=Object.keys(dataLivingroom).length
            const dataBedroom=data.payload.hasOwnProperty("Phòng ngủ") ? data.payload["Phòng ngủ"] :{};
            const countBedroom=Object.keys(dataBedroom).length
            const dataKitchen=data.payload.hasOwnProperty("Nhà bếp") ? data.payload["Nhà bếp"] :{};
            const countKitchen=Object.keys(dataKitchen).length
            const dataGarden=data.payload.hasOwnProperty("Sân vườn") ? data.payload["Sân vườn"] :{};
            const countGarden=Object.keys(dataGarden).length
            const dataStore=data.payload.hasOwnProperty("Lưu trữ") ? data.payload["Lưu trữ"] :{};
            const countStore=Object.keys(dataGarden).length
            return {
                'Phòng khách': {
                    "Data":dataLivingroom,
                    'Count': countLivingroom, 
                },
                'Phòng ngủ': {
                    "Data":dataBedroom,
                    'Count': countBedroom,
                },
                'Nhà bếp': {
                    "Data":dataKitchen,
                    'Count': countKitchen,
                },
                'Sân vườn': {
                    "Data":dataGarden,
                    'Count': countGarden,
                },
                "Lưu trữ":{
                    "Data":dataStore,
                    "Count":countStore
                }
            }
        },
        deleteMyPlant(state,data){
            const roomName=data.payload["roomName"]
            const idPlant=data.payload['idPlant']
            const count=state[roomName]['Count']
            delete state[roomName]["Data"][idPlant]
            state[roomName]["Count"]=count-1
            return state
        },
    }
})

export const { actions, reducer } = plantsReducer
export const {updateAllPlants,deleteMyPlant,addMyPlant } = actions
export default reducer