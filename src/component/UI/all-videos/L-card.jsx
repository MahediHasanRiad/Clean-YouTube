import { Link, useParams } from "react-router-dom";


function Lcard({ playlistVideos }) {
  const { id: playlistId } = useParams();

  return (
    <div className="col-6">
      {playlistVideos.map((item, index) => (
        <Link
              to={`/allplaylist/${playlistId}/${item.videoId}`}
              style={{ color: "inherit", textDecoration: "none",  }}
        >
        <section className="d-flex p-2" key={index}>
          <div>
            {item.thumbnail?.url ? (
              <img
                src={item.thumbnail.url}
                alt={item.title}
                className="me-1 rounded"
                style={{
                  height: '100%',
                  width: '90%',
                }}
              />
            ) : (
              <div
                className="me-1"
                style={{ width: "100%", height: "180px", background: "#ccc" }}
              >
                No Image
              </div>
            )}
          </div>
          <div style={{ width: '50%' }}>
              <h6> {item.title} </h6>
            
            <span
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                color: 'gray'
              }}
            >
              {item.description}
            </span>
          </div>
        </section>
        </Link>
      ))}
    </div>
  );
}

export default Lcard;
