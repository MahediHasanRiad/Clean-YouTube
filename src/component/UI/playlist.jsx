import PlaylistCard from "../Utils/playlist-card";

function Playlist({ playlists }) {

  const PlaylistArray = Object.values(playlists)

  return (
    <div className="container">
      <div className="row">
        {PlaylistArray.length > 0 && PlaylistArray.map(item => (
          <PlaylistCard
            key={item.playlistId}
            image={item.thumbnail.url}
            playlistName={item.playlistTitle}
            playlistDescription={item.playlistDescription}
            playlistId={item.playlistId}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
