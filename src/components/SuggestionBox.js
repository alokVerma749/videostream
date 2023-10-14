import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SuggestionBox = ({ list }) => {
    return (
        <div className="text-white w-full rounded-xl mt-2 bg-gray-700 p-2 space-y-2 text-xl  absolute top-10">
            {
                list.map(suggestion => {
                    return (
                        <div key={suggestion} className='flex flex-row items-center space-x-2 hover:bg-gray-300'>
                            < FontAwesomeIcon className='text-white h-3 cursor-pointer' icon={faMagnifyingGlass} />
                            <p className='items-center' >{suggestion}</p>
                            {/* <p className='items-center' >iphone</p> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SuggestionBox