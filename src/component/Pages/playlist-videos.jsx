import { useParams } from 'react-router-dom'

function PlaylistAllVideos({ playlists }) {

  const playlistId = useParams()


  return (
    <div>
      <h1>Playlist Video</h1>
    </div>
  )
}

export default PlaylistAllVideos
