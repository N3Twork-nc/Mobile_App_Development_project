import { configureStore} from "@reduxjs/toolkit"
import infoUserReducer from "../reducers/infoUser"
import tokenReducer from "../reducers/token"
import gardenReducer from "../reducers/mygarden"
import dataMQTT from "../reducers/dataMQTT"

const rootReducer={
    infoUser: infoUserReducer,
    token: tokenReducer,
    garden:gardenReducer,
    dataMQTT:dataMQTT,
}

const store=configureStore({
    reducer:rootReducer
})

export default store