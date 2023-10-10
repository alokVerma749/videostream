import { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }

    return (
        <div className='flex flex-row flex-wrap justify-start'>
            {
                videos.map(video => <VideoCard info={video} key={video.id} />)
            }
        </div>
    )
}

export default VideoContainer