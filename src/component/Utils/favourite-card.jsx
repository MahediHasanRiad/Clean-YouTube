import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../features/favourite-Slice";

function FavouriteCard({
  image,
  playlistName,
  playlistDescription,
  playlistId,
}) {

  const dispatch = useDispatch()

  return (
    <section className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          alt={playlistName}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{playlistName}</h5>
            <p
              className="card-text flex-grow-1 overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {playlistDescription || "No description available"}
            </p>
          </div>
          <div className="mt-4 w-100 d-flex justify-content-between">
            <div>
              <Link
                to={`/allplaylist/${playlistId}`}
                className="link-underline link-underline-opacity-0 mt-auto"
              >
                View Playlist...
              </Link>
            </div>
            <div>
              {/* <Link to={''} className="m-2" onClick={() => dispatch(addFavourite(playlistId))}>
                <CiHeart size={25} />
              </Link> */}
              <Link to={''} className="m-2" onClick={() => dispatch(removeFavourite(playlistId))}>
                <MdDeleteOutline size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FavouriteCard;
