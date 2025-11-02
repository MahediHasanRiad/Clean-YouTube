import PlaylistCard from "./playlist-card";

function Playlist({ playlists }) {


  return (
    <div className="container">
      <div className="grid mt-4">
        <PlaylistCard
        image="..."
        playlistName="JavaScript all you need to know"
        playlistDescriptio11n="this is description"
        viewFullPlaylist='#'
      />
      </div>
    </div>
  );
}

export default Playlist;
