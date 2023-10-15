import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const LiveChat = () => {
    const [isChatVisible, setIsChatVisible] = useState(true);
    return (
        <div className=" border border-gray-400 w-[90%] mx-auto relative rounded-xl">
            <div className="head text-center rounded-tl-xl rounded-tr-xl bg-gray-400 text-white">LiveChat</div>
            <div className={`chats ${isChatVisible ? "h-[70vh] overflow-y-scroll" : "hidden"}`}>
                <div className="chat bg-gray-500 p-1 flex space-x-5 items-center">
                    <FontAwesomeIcon className='text-white h-5' icon={faUser} />
                    <p>message</p>
                </div>
            </div>
            <button className="text-center rounded-bl-xl rounded-br-xl bg-gray-400 text-white absolute left-0 right-0 bottom-0 " onClick={() => setIsChatVisible(!isChatVisible)}>{isChatVisible ? "Hide Chat" : "Show chat"}</button>
        </div>
    )
}

export default LiveChat;