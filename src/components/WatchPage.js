import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';

import { useSearchParams } from 'react-router-dom';

import SideBarVideos from './SideBarVideos.js';
import Comments from './Comments';

import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [comments, setComments] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
        getCommets();
    }, [searchParams])

    const getCommets = async () => {
        const data = await fetch(YOUTUBE_COMMENTS_API + "&videoId=" + searchParams.get("v"));
        const json = await data.json();
        setComments(json.items);
    }
    return (
        <div className='flex flex-col md:flex-row md:m-1 mx-auto'>
            <div className='w-[90%] mx-auto mb-8 md:w-3/4 m-1'>
                <div className="player">
                    <iframe
                        className='w-full h-[30vh] md:h-[70vh] mx-auto rounded-lg '
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="comments space-y-1 w-[80%]">
                    <p className='text-gray-900 text-3xl'>Comments</p>
                    <div className='space-y-8 mb-5'>
                        {
                            comments.map(comment => <Comments info={comment} />)
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:w-1/4'>
                <LiveChat />
                <SideBarVideos />
            </div>
        </div>

    )
}

export default WatchPage;