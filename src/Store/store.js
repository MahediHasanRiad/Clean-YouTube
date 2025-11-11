import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from '../component/features/youtubeSlice'

export const Store = configureStore({
    reducer: {
        CleanYoutube: youtubeSlice
    }
})