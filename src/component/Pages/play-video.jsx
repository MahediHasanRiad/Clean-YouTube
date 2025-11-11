import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'

function PlayVideos() {
  const { videoId } = useParams();

  return (
    <section>
      <ReactPlayer
        style={{ margin: 'auto' }}
        width="450px"
        height="380px"
        src={`https://www.youtube.com/embed/${videoId}`}
        controls={true}
        playing={true}
        muted
        // light={true} // video thumbnail
      />
    </section>
  );
}

export default PlayVideos;
