import { useSelector } from "react-redux";
import FavouriteCard from "../Utils/favourite-card";

function Favourite() {
  const favourites = useSelector((state) => state.Favourite.favourites);
  const playlists = useSelector((state) => state.Playlist.playlists);

  const favouritePlaylists = playlists.filter((p) => 
    favourites.includes(p.playlistId)
  );
console.log('f', favouritePlaylists)
  return (
    <div className="container">
      <h3>Favourite:</h3>
      <div className="row">
        {favouritePlaylists.length <= 0 ? (
          <div>No Favourite Item.</div>
        ) : (
          favouritePlaylists.map((item) => (
            <FavouriteCard
              key={item.playlistId}
              image={item.thumbnail.url}
              playlistName={item.playlistTitle}
              playlistDescription={item.playlistDescription}
              playlistId={item.playlistId}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Favourite;
