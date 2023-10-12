
const SuggestionBox = ({ list }) => {
    if (!list) return <p>Loading</p>
    return (
        <div className="text-white text-xl">
            {
                list.map(suggestion => <p key={suggestion}>{suggestion}</p>)
            }
        </div>
    )
}

export default SuggestionBox