import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPlaylist from "../API";

// create thunk for async function
export const fetchPlaylist = createAsyncThunk(
  "playlist/fetchPlaylist",
  async (playlistId) => {
    const playlist = await getPlaylist(playlistId);
    return playlist;
  }
);

const initialValue = {
  playlists: [],
  isError: "",
  isLoading: false,
};

export const PlaylistSlice = createSlice({
  name: "AllPlaylists",
  initialState: initialValue,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylist.pending, (state) => {
        state.isError = "";
        state.isLoading = true;
      })
      .addCase(fetchPlaylist.fulfilled, (state, action) => {
        state.isError = "";
        state.isLoading = false;

        const exists = state.playlists.find((p) => p.playlistId === action.payload.playlistId );
        if (!exists) {
          state.playlists.push(action.payload);
        }
        if(exists){
            console.log('Playlist Exists !')
        }
      })
      .addCase(fetchPlaylist.rejected, (state, action) => {
        state.isError = action.error?.message;
        state.isLoading = false;
      });
  },
});

export const {} = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
