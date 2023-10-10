
const VideoCard = ({ info }) => {
    const { id, etag } = info;
    const { channelTitle, channelId, thumbnails, publishedAt } = info.snippet;
    const { description, title } = info.snippet.localized;
    const { likeCount, viewCount } = info.statistics;

    return (
        <div className={"flex flex-col w-full md:w-[30%] m-3 cursor-pointer space-y-1"}>
            < img className="thummbnail rounded-xl" src={thumbnails.medium.url} alt="" />
            <div className="title">{title}</div>
            <div className="channel_name">{channelTitle}</div>
            <div className="stats">{likeCount} views {publishedAt} ago</div>
        </div >
    )
}

export default VideoCard