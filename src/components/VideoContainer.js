import VideoCard from './VideoCard';
import useFetchVideos from '../hooks/useFectchVideos';

const VideoContainer = () => {
    const videos = useFetchVideos();
    return (
        <div className='flex flex-row flex-wrap justify-center'>
            {
                videos.map(video => <VideoCard info={video} key={video.id} />)
            }
        </div>
    )
}

export default VideoContainer;