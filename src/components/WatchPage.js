import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';

import { useSearchParams } from 'react-router-dom';
import VideoContainer from './VideoContainer';
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import Comments from './Comments';

const WatchPage = () => {
    const [comments, setComments] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
        getCommets();
    }, [])

    const getCommets = async () => {
        const data = await fetch(YOUTUBE_COMMENTS_API + "&videoId=" + searchParams.get("v"));
        const json = await data.json();
        setComments(json.items);
    }
    return (
        <div className='p-2 w-full flex flex-row'>
            <div className="w-3/4 flex flex-col">
                <div className="player h-screen">
                    <iframe
                        className='w-full mx-auto rounded-lg h-3/4'
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="comments border border-yellow-500 space-y-1">
                    <p className='text-gray-900 text-3xl mb-5'>Comments</p>
                    <div className='space-y-8'>
                        {
                            comments.map(comment => <Comments info={comment} />)
                        }
                    </div>

                </div>
            </div>
            <div className="videoSuggestions w-[20%] border border-blue-500 mx-auto">
                <VideoContainer />
            </div>
        </div>

    )
}

export default WatchPage;