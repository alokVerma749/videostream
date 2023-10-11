import useFetchVideos from '../hooks/useFectchVideos';
import { SideVideoCard } from './VideoCard';

const SideBarVideos = () => {
    const videos = useFetchVideos();
    return (
        <div className='flex flex-col space-y-3 p-2 border-t-2 md:border-0'>
            {
                videos.map(video => <SideVideoCard info={video} key={video.id} />)
            }
        </div>
    )
}

export default SideBarVideos;