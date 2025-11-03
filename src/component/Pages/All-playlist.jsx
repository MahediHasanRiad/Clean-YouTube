import Playlist from "../UI/playlist";
import AddPlayListBtn from "../UI/add-playlist-btn";
import { useEffect, useState } from "react";
import usePlaylist from "../Hooks/usePlaylist";

function AllPlaylist() {

    const [playlistId, setPlaylistId] = useState('')
    const { getPlaylistById, playlists } = usePlaylist()

    // input playlist
    const playlistLink = (e) => {
       setPlaylistId(e.target.value)

    }
    // submit button 
    const submitPlaylist = (e) => {
      e.preventDefault()

      if(playlistId.trim()){
        getPlaylistById(playlistId)
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

      <Playlist playlists={playlists} />
    </section>
  );
}

export default AllPlaylist;
