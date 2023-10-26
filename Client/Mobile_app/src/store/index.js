import { configureStore} from "@reduxjs/toolkit"
import infoUserReducer from "../reducers/infoUser"

const rootReducer={
    infoUser: infoUserReducer
}

const store=configureStore({
    reducer:rootReducer
})

export default store