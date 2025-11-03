import { useEffect, useState } from "react"
import getPlaylist from "../API"


const initialValue = {
    playlists: {},
    favourites: [],
    recentPlaylists: []
}
const usePlaylistItem = () => {

    const [state, setState] = useState({...initialValue})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // set local Storage
    useEffect(() => {
        const result = localStorage.getItem('CY__Playlist')
        if(result){
            try {
                const parse = JSON.parse(result)
                setState(parse)
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

      useEffect(() => {
        if(state !== initialValue){
            localStorage.setItem('CY__Playlist', JSON.stringify(state))
        }
    }, [state])
    // set local storage end

    // set playlist
    const getPlaylistById = async ( playlistId, force = false ) => {

        if(state.playlists[playlistId] && !force){
            return
        }

        // set Error and loading
        setError('')
        setLoading(true)

        try {
            const playlist = await getPlaylist(playlistId)

            setState(prev => ({
                ...prev,
                playlists: {
                    ...prev.playlists,
                    [playlistId]: playlist
                }
            }))
        } catch (e) {
            setError( e.response?.data?.error?.message || 'something went wrong...')
        } finally {
            setLoading(false)
        } 
    }

    // set favourite
    const addFavourite = (playlistId) => {
        setState(prev => ({
            ...prev,
            favourites: [...prev.favourites, playlistId]
        }))
    }

    // set recent-open-playlist
    const addRecentPlaylist = (playlistId) => {
        setState(prev => ({
            ...prev,
            recentPlaylists: [...prev.recentPlaylists, playlistId]
        }))
    }

    // find by id
    const getPlaylistByIds = ( ids = [] ) => {
       return ids.map(id => state.playlists[id])
    }

    return {
        playlists: state.playlists,
        favourites: getPlaylistByIds(state.favourites),
        recentPlaylists: getPlaylistByIds(state.recentPlaylists),
        error,
        loading,
        getPlaylistById,
        addFavourite,
        addRecentPlaylist
    }
}


export default usePlaylistItem