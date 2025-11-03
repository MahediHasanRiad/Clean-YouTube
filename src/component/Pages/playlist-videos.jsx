import { useParams } from 'react-router-dom'
import usePlaylistItem from '../Hooks/usePlaylist'
import { useEffect } from 'react'

function PlaylistAllVideos() {

  const { id: playlistId } = useParams()
  const { playlists, getPlaylistById, error, loading } = usePlaylistItem()

  useEffect(() => {
    getPlaylistById(playlistId)
  }, [playlistId])

  // find --> Playlist
  const playlist = playlists[playlistId]

  if (!playlist) {
    return <div className="container mt-5"><h3>Playlist not found</h3></div>
  }

  if(error){
    return <div className="container mt-5"><h3>Error: {error}</h3></div>
  }

  if(loading){
    return <div className="container mt-5"><h3>Loading...</h3></div>
  }

  return (
    <div>
      <h1>{playlist.channelTitle}</h1>
      <p>{playlist.playlistDescription}</p>
    </div>
  )
}

export default PlaylistAllVideos
