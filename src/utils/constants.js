const GOOGLE_API_KEY = "AIzaSyBGWoCqL_DwLaMzDgxtPMCEjB4kmcBB01o";
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&&maxResults=50&key=" + GOOGLE_API_KEY;
export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" + GOOGLE_API_KEY;
// export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_API = "https://suggestqueries-clients6.youtube.com/complete/search?client=firefox&ds=yt&q=";

export const BUTTONLIST_MOCK_DATA = ['All', 'Music', 'Lo-fi', 'Sitcoms', 'Live', 'Computer Programming', 'Mixes', 'Rain', 'Claassical Music', 'News', 'Jazz', 'Recently Uploaded', 'Watched', 'New to you', 'New to you', 'New to you', 'New to you', 'New to you'];