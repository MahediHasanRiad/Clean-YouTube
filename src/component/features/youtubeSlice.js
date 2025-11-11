import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPlaylist from "../API";

// creat thunk for async function
export const fetchPlaylist = createAsyncThunk('playlist/fetchPlaylist', async () => {
    const playlists = await getPlaylist()
    return playlists;
})

const initialValue = {
    state: {
        palylists: [],
        addFavourites: [],
        addRecentPlaylist: []
    },
    isError: '',
    isLoading: false
}

export const YoutubeSlice = createSlice({
    name: 'AllPlaylists',
    initialState: initialValue,
    extraReducers: (builder) => {
        builder.addCase(fetchPlaylist.pending, (state, action) => {
            state.isError('')
            state.isLoading(true)
            })
            .addCase(fetchPlaylist.fulfilled, (state, action) => {
                

            })
            .addCase(fetchPlaylist.rejected, (state, action) => {
                state.isError = action.error?.message
            })
    }
})

export const {} = YoutubeSlice.actions
export default YoutubeSlice.reducer