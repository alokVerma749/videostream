import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';

import { useSearchParams } from 'react-router-dom';

import SideBarVideos from './SideBarVideos.js';
import Comments from './Comments';

import { YOUTUBE_COMMENTS_API } from '../utils/constants';

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
        <div className='p-2 w-full flex flex-col md:flex-row'>
            <div className="flex flex-col">
                <div className="player h-screen">
                    <iframe
                        className='w-full mx-auto rounded-lg h-3/4'
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="comments space-y-1">
                    <p className='text-gray-900 text-3xl mb-5'>Comments</p>
                    <div className='space-y-8'>
                        {
                            comments.map(comment => <Comments info={comment} />)
                        }
                    </div>

                </div>
            </div>
            <div className="videoSuggestions md:w-[35%]  p-3 justify-center mx-auto">
                <SideBarVideos />
            </div>
        </div>

    )
}

export default WatchPage;