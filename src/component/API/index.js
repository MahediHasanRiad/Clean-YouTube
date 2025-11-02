import axios from "axios";

const Key = import.meta.env.VITE_API_Key;

const getPlaylist = async (playlistId, pageToken = "", result = []) => {

  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${Key}&pageToken=${pageToken}`;
  const { data } = await axios.get(URL);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = await getPlaylist(playlistId, data.nextPageToken, result);
  }

  return result;
};

export default getPlaylist;
