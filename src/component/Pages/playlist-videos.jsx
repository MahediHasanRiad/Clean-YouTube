import { useParams } from 'react-router-dom'
import Rcard from '../UI/all-videos/r-card'
import Lcard from '../UI/all-videos/L-card'
import { useSelector } from 'react-redux'


function PlaylistAllVideos() {

  const { id: playlistId } = useParams()

  const AllPlaylist = useSelector(state => state.Playlist.playlists)
  const isError = useSelector(state => state.Playlist.isError)
  const isLoading = useSelector(state => state.Playlist.isLoading)

  const playlist = AllPlaylist.find(p => p.playlistId === playlistId)


  if (!playlist) {
    return <div className="container mt-5"><h3>Playlist not found</h3></div>
  }

  return (
    <section className='row' style={{ width: '100%', height: '1000px', overflow: 'scroll'}}>
      {isError && <div>Error: {isError}</div>}
      {isLoading && <div>Loading...</div>}
      <Rcard playlistThumbnail={playlist.thumbnail.url} playlistTitle={playlist.playlistTitle}/>
      <Lcard playlistVideos={playlist.playlistItems} />
    </section>
  )
}

export default PlaylistAllVideos
