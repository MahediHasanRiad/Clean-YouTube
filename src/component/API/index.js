import axios from "axios";

const Key = import.meta.env.VITE_API_Key;

const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {

  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${Key}&pageToken=${pageToken}`;
  const { data } = await axios.get(URL);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = await getPlaylistItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=id%2Csnippet&id=${playlistId}&maxResults=50&key=${Key}`
  const { data } = await axios.get(URL)
  let playlistItems = await getPlaylistItem(playlistId)

  // playlist 
  const { title: playlistTitle, description: playlistDescription, thumbnails: {medium}, channelId, channelTitle } = data.items[0].snippet

  // playlist item
  playlistItems = playlistItems.map(item => {
    const { title, description, thumbnails: {medium} } = item.snippet

    return {
      title,
      description,
      thumbnail: medium,
    }
  })

  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    thumbnail: medium,
    channelId,
    channelTitle,
    playlistItems,
  }
}

export default getPlaylist;
