import { configureStore} from "@reduxjs/toolkit"
import infoUserReducer from "../reducers/infoUser"
import tokenReducer from "../reducers/token"

const rootReducer={
    infoUser: infoUserReducer,
    token: tokenReducer
}

const store=configureStore({
    reducer:rootReducer
})

export default store