import React from 'react'

const Comments = ({ info }) => {
    const {
        authorChannelUrl,
        authorDisplayName,
        authorProfileImageUrl,
        likeCount,
        textDisplay,
        textOriginal
    } = info.snippet.topLevelComment.snippet;
    return (
        <div className='space-y-2 m-3'>
            <div className='flex flex-row justify-between w-fit items-center'>
                <img className='rounded-full w-8' src={authorProfileImageUrl} alt="" />
                <div className='ml-5'>{authorDisplayName}</div>
            </div>
            <p>{textOriginal}</p>
        </div>
    )
}

export default Comments