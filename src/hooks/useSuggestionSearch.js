import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

function useSearchSuggestion(searchQuery) {
    const [suggestions, setSuggestions] = useState('');
    useEffect(() => {
        getData();
    }, [searchQuery])

    const getData = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
    }
    return suggestions;
}

export default useSearchSuggestion;