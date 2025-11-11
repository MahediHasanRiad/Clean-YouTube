import { Link, useParams } from "react-router-dom";

function Lcard({ playlistVideos }) {
  const { id: playlistId } = useParams();

  return (
    <div className="col-8">
      {playlistVideos.map((item, index) => (
        <section className="d-flex p-4" key={index}>
          <div>
            {item.thumbnail?.url ? (
              <img
                src={item.thumbnail.url}
                alt={item.title}
                className="me-4 rounded"
                style={{
                  height: item.thumbnail.height || "auto",
                  width: item.thumbnail.width || "320px",
                }}
              />
            ) : (
              <div
                className="me-4"
                style={{ width: "320px", height: "180px", background: "#ccc" }}
              >
                No Image
              </div>
            )}
          </div>
          <div>
            <Link
              to={`/allplaylist/${playlistId}/${item.videoId}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <h4> {item.title} </h4>
            </Link>
            <h6
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.description}
            </h6>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Lcard;
