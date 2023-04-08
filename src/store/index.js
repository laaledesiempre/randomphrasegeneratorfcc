import {configureStore} from "@reduxjs/toolkit"
import {phrasesReducer} from "./slices/phrases"

export const store= configureStore({
    reducer: {
        phrasesReducer
    }
})