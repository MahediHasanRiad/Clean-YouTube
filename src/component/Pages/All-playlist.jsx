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
        if(playlistId.trim()){
          getPlaylistById(playlistId)
        }
    }



  return (
    <section>
      <AddPlayListBtn playlistLink={playlistLink} submitPlaylist={submitPlaylist}/>
      <Playlist playlists={playlists} />
    </section>
  );
}

export default AllPlaylist;
