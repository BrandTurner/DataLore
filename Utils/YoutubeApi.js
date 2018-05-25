const API_KEY = 'AIzaSyBSqVGVtYsetHrjrhrzCwxtNtMi7yeP0WY';
const youtubeApiBaseUrl = 'https://www.googleapis.com/youtube/v3';

export default class Api {
  static search(query) {
    let url = `${youtubeApiBaseUrl}/search?part=snippet&type=video&maxResults=50&q=${query}&key=${API_KEY}`;
    //let url =      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLNXQWMqiSM3Bk8OrhIqOkqWhG9YFnvkKX&key=AIzaSyBSqVGVtYsetHrjrhrzCwxtNtMi7yeP0WY';
    console.log(url);
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json)
          return json})
      .catch(error => console.warn(error));
  }
}
