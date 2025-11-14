import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    recentPlaylists: [],
    isError: '',
    isLoading: false
}

const RecentPlaylistSlice = createSlice({
    name: 'recent-playlist',
    initialState,
    reducers: {
        addRecentPlaylist: (state, action) => {
            
        },
        removeRecentPlaylist: (state, action) => {

        }
    }
})

export const { addRecentPlaylist, removeRecentPlaylist } = RecentPlaylistSlice.actions
export default RecentPlaylistSlice.reducer