import { Routes, Route } from 'react-router-dom'
import NavBar from './component/UI/navbar'
import Home from './component/Pages/home'
import AllPlaylist from './component/Pages/All-playlist'
import About from './component/Pages/about'
import Contact from './component/Pages/contact'
import PlaylistAllVideos from './component/Pages/playlist-videos'


function App() {

  return (
    <section className='container'>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/allplaylist' element={<AllPlaylist/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/allplaylist/:id' element={<PlaylistAllVideos/>}/>
    </Routes>
    </section>
  )
}

export default App
