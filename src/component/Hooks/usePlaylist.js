import { useState } from "react"
import getPlaylist from "../API"


const initialValue = {
    playlists: {},
    favourites: [],
    recentPlaylists: []
}
const usePlaylist = () => {

    const [state, setState] = useState({...initialValue})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // set playlist
    const getPlaylistById = async ( playlistId, force = false ) => {

        if(state.playlists[playlistId] && !force){
            return
        }

        // set Error and loading
        setError('')
        setLoading(true)

        try {
            let result = await getPlaylist(playlistId)
    
            // "channelId & channelTitle" are always same
            let cid, ct;
    
            result = result.map(item => {
                const { channelId, title, description, thumbnails: {medium}, channelTitle } = item.snippet
                
                if(!cid){
                    cid = channelId
                }
                if(!ct){
                    ct = channelTitle
                }
    
                return {
                    title,
                    description,
                    thumbnail: medium,
                    contentDetails: item.contentDetails
                }
            })
    
            setState(prev => ({
                ...prev,
                playlists: {
                    ...prev.playlists,
                    [playlistId]: {
                        items: result,
                        playlistId: playlistId,
                        channelId: cid,
                        channelTitle: ct
                    }
                }
            }))
        } catch (e) {
            setError( e.response.data.error.message || 'something went wrong...')
        } finally {
            setLoading(false)
        } 
    }
    console.log(error)

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

export default usePlaylist