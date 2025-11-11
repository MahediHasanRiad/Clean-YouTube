
function Rcard({ playlistThumbnail, playlistTitle }) {
  return (
    <section className='col-4 p-4 rounded' style={{ background: '#e2e1d96f', height: '100%', display: 'block'}}>
        <img src={playlistThumbnail} alt="" className='w-100'/>
        <h4 className='mt-2'>{playlistTitle}</h4>
    </section>
  )
}

export default Rcard
