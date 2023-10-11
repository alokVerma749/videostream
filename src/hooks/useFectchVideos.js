import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

function useFetchVideos() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, [])
    async function getVideos() {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            setVideos(json.items);
        } catch (error) {
            console.log(error.message || error || 'something wrong happened in useFetchVideos hook');
        }
    }
    return videos;
    // return {
    //     videos,
    //     setVideos
    // }
}

export default useFetchVideos;