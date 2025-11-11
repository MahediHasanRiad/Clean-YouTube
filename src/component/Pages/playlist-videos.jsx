import { useParams } from 'react-router-dom'
import usePlaylistItem from '../Hooks/usePlaylist'
import { useEffect } from 'react'
import Rcard from '../UI/all-videos/r-card'
import Lcard from '../UI/all-videos/L-card'

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
    <section className='row' style={{ width: '100%', height: '1000px', overflow: 'scroll'}}>
      <Rcard playlistThumbnail={playlist.thumbnail.url} playlistTitle={playlist.playlistTitle}/>
      <Lcard playlistVideos={playlist.playlistItems} />
    </section>
  )
}

export default PlaylistAllVideos
