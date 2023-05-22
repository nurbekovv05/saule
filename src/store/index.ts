import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieReducer from "../Reducers/MovieSlice";
import detailPageSlice from "../Reducers/DetailSlice";

const rootReducer = combineReducers({
    movieReducer,
    detailPageSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']