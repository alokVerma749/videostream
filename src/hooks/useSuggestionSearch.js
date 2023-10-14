import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

function useSearchSuggestion(searchQuery) {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const timer = setTimeout(() => getData(), 200);
        return () => clearTimeout(timer);
    }, [searchQuery])

    const getData = async () => {
        try {
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await data.json();
            setSuggestions(json[1]);
        } catch (error) {
            console.log(error.message || "suggestion fetch failed");
        }
    }
    return suggestions;
}

export default useSearchSuggestion;