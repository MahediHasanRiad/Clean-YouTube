import Playlist from "../UI/playlist";
import AddPlayListBtn from "../UI/add-playlist-btn";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../features/playlist-Slice";
import { useState } from "react";
import Favourite from "../UI/favourite";

function AllPlaylist() {

    const [playlistId, setPlaylistId] = useState('')

    const isError = useSelector(state => state.Playlist.isError)
    const isLoading = useSelector(state => state.Playlist.isLoading)
    const dispatch = useDispatch()


    // input playlist
    const playlistLink = (e) => {
       setPlaylistId(e.target.value)

    }
    // submit button 
    const submitPlaylist = (e) => {
      e.preventDefault()

      if(playlistId.trim()){
        dispatch(fetchPlaylist(playlistId))
      }
      setPlaylistId('')
    }



  return (
    <section>
      <AddPlayListBtn 
        playlistLink={playlistLink} 
        submitPlaylist={submitPlaylist}
        value={playlistId}
      />
      {isError && <div>Error: {isError}</div>}
      {isLoading && <div>Loading...</div>}
      <Favourite/>
      <Playlist/>
    </section>
  );
}

export default AllPlaylist;
