import { configureStore } from "@reduxjs/toolkit";
import PlaylistSlice from "../component/features/playlist-Slice";
import FavouriteSlice from '../component/features/favourite-Slice';
import RecentPlaylistSlice from '../component/features/recentPlaylist-Slice';


export const Store = configureStore({
    reducer: {
        Playlist: PlaylistSlice,
        Favourite: FavouriteSlice,
        RecentPlaylist: RecentPlaylistSlice
    }
})