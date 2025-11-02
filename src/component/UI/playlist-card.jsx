import { Link } from "react-router-dom"


function PlaylistCard({ image, playlistName, playlistDescription, viewFullPlaylist }) {
  return (
    <section className="g-col-4">
      <div className="card" style={{ width: "18rem;" }}>
        <img src={image} className="card-img-top" alt={playlistName} />
        <div className="card-body">
            <h5 className="card-title">{playlistName}</h5>
            <p className="card-text">{playlistDescription}</p>
            <Link to={`/${viewFullPlaylist}`} className="link-underline link-underline-opacity-0">View Playlist...</Link>
        </div>
      </div>
    </section>
  )
}

export default PlaylistCard
