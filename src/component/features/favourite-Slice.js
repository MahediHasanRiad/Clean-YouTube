import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: [],
    isError: '',
    isLoading: false
}
const Favourite = createSlice({
    name: 'FavouriteReducer',
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            const playlistId = action.payload
            const exist = state.favourites.includes(playlistId)

            if(!exist) state.favourites.push(playlistId)
            if(exist) console.log('ADDED !')
        },
        removeFavourite: (state, action) => {
            state.favourites = state.favourites.filter(playlistId => playlistId !== action.payload)
        }
    }
})

export const { addFavourite, removeFavourite } = Favourite.actions
export default Favourite.reducer