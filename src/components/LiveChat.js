import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import usePollLiveCommments from "../hooks/usePollLiveComments";

const LiveChat = () => {
    const [isChatVisible, setIsChatVisible] = useState(true);
    const polledMessages = usePollLiveCommments();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom()
    }, [polledMessages])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    };

    return (
        <div className=" border border-gray-400 w-[90%] mx-auto relative rounded-xl">
            <div className="head text-center rounded-tl-xl rounded-tr-xl bg-gray-400 text-white">LiveChat</div>
            <div className={`chats space-y-1 ${isChatVisible ? "h-[70vh] overflow-y-scroll" : "hidden"}`}>
                {
                    polledMessages.map(((comment, index) => {
                        return (
                            <div ref={messagesEndRef} div key={index} className="chat bg-gray-500 p-1 flex space-x-5 items-center" >
                                <FontAwesomeIcon className='text-white h-5' icon={faUser} />
                                <p>{comment}</p>
                            </div>
                        )
                    }))
                }
            </div >
            <button className="text-center rounded-bl-xl rounded-br-xl bg-gray-400 text-white absolute left-0 right-0 bottom-0 " onClick={() => setIsChatVisible(!isChatVisible)}>{isChatVisible ? "Hide Chat" : "Show chat"}</button>
        </div >
    )
}

export default LiveChat;