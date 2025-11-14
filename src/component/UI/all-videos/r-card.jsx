
function Rcard({ playlistThumbnail, playlistTitle }) {
  return (
    <section className='col-6 p-4 rounded' style={{ height: '100%', display: 'block'}}>
        <img src={playlistThumbnail} alt="" className='w-100'/>
        <h4 className='mt-2'>{playlistTitle}</h4>
    </section>
  )
}

export default Rcard
