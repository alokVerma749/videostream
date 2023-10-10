import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';

import { useSearchParams } from 'react-router-dom';
import VideoContainer from './VideoContainer';

const WatchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch();

    console.log(searchParams.get("v"));

    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    return (
        <div className='p-2 border border-red-900 w-full flex flex-row'>
            <div className="w-3/4 flex flex-col border h-screen border-green-900">
                <div className="player h-3/4">
                    <iframe
                        className='w-full mx-auto h-full rounded-lg'
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="comments border border-yellow-500">
                    Comments
                </div>
            </div>
            <div className="videoSuggestions w-[20%] border border-blue-500 mx-auto ">
                <VideoContainer />
            </div>
        </div>

    )
}

export default WatchPage