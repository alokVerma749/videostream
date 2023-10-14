import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
    const { id, etag } = info;
    const { channelTitle, channelId, thumbnails, publishedAt } = info.snippet;
    const { description, title } = info.snippet.localized;
    const { likeCount, viewCount } = info.statistics;

    return (
        <div className={"flex flex-col w-full md:w-[23%] m-3 cursor-pointer space-y-1"}>
            <Link to={"/watch?v=" + id}>
                < img className="thummbnail rounded-xl mx-auto md:mx-0" src={thumbnails.medium.url} alt="" />
                <div className="title text-center md:text-start">{title}</div>
            </Link>
            <div className="channel_name text-center md:text-start">{channelTitle}</div>
            <div className="stats text-center md:text-start">{likeCount} views {publishedAt} ago</div>
        </div >
    )
}

export const SideVideoCard = ({ info }) => {
    const { id } = info;
    const { channelTitle, channelId, thumbnails } = info.snippet;
    const { title } = info.snippet.localized;
    return (
        <Link to={"/watch?v=" + id} className={"flex flex-row items-center cursor-pointer p-2 space-x-2"}>
            < img className="thummbnail w-[180px] h-[100px] rounded-xl" src={thumbnails.medium.url} alt="" />
            <div className="w-3/4">
                <div className="title text-sm">{title}</div>
                <div className="channel_name text-sm">{channelTitle}</div>
            </div>
        </Link >
    )
}

export default VideoCard;