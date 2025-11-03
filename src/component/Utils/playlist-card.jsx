import { Link } from "react-router-dom"

function PlaylistCard({ image, playlistName, playlistDescription, playlistId }) {
  return (
    <section className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <img 
          src={image} 
          className="card-img-top" 
          alt={playlistName}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{playlistName}</h5>
          <p className="card-text flex-grow-1 overflow-hidden" style={{display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical"}}>
            {playlistDescription || "No description available"}
          </p>
          <Link 
            to={`/allplaylist/${playlistId}`}
            className="link-underline link-underline-opacity-0 mt-auto"
          >
            View Playlist...
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PlaylistCard