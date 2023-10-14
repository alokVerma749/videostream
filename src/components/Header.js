import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBell, faVideo, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useState } from 'react';
import useSearchSuggestion from '../hooks/useSuggestionSearch';
import SuggestionBox from './SuggestionBox';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(true);
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const isMenuOpen = useSelector(store => store.app.isMenuOpenFlag);

    const suggestions = useSearchSuggestion(searchQuery);

    return (
        <div className='flex flex-row border justify-between border-black p-2 bg-gray-900 items-center'>
            < FontAwesomeIcon onClick={toggleMenuHandler} className='text-white h-8 cursor-pointer' icon={faBars} />
            {
                !isMenuOpen && <div className="left flex flex-row w-40 p-2 justify-between items-center">
                    <img src="/logo.png" alt="YT-LOGO" className='w-28 ml-[-150px] hidden md:block' />
                </div>
            }

            <form className="inputBox flex flex-row w-[90%] md:w-1/3 relative">
                <input type="text"
                    placeholder='search'
                    className='h-10 text-white border border-white w-full md:w-[85%] p-2 rounded-l-full outline-0 bg-gray-900'
                    value={searchQuery}
                    onChange={(e) => {
                        e.preventDefault();
                        setSearchQuery(e.target.value);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <button className='w-[10%] bg-gray-700 rounded-r-full h-10 border border-white'>
                    < FontAwesomeIcon className='text-white h-4' icon={faMagnifyingGlass} />
                </button>
                {
                    showSuggestions && (suggestions.length !== 0) ? <SuggestionBox list={suggestions} /> : null
                }
            </form>

            <div className="right hidden md:flex flex-row items-center border border-red-900 w-1/6 p-2 justify-evenly">
                < FontAwesomeIcon className='text-white h-5' icon={faVideo} />
                < FontAwesomeIcon className='text-white h-5' icon={faBell} />
                <FontAwesomeIcon className='text-white h-5' icon={faUser} />
            </div>
        </div>
    )
}

export default Header;