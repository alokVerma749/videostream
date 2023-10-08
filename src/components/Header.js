import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBell, faVideo, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className='flex flex-row border justify-between border-black p-2 bg-gray-900 items-center'>
            <div className="left flex flex-row border border-blue-900 w-1/12 p-2 justify-between items-center">
                < FontAwesomeIcon className='text-white h-8' icon={faBars} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" alt="YT-LOGO" className='w-12' />
            </div>

            <form className="inputBox flex flex-row w-1/3">
                <input type="text" placeholder='search' className='h-10 text-white border border-white w-[85%] p-2 rounded-l-full outline-0  bg-gray-900' />
                <button className='w-[10%] bg-gray-700 rounded-r-full h-10 border border-white'>
                    < FontAwesomeIcon className='text-white h-4' icon={faMagnifyingGlass} />
                </button>
            </form>

            <div className="right flex flex-row items-center border border-red-900 w-1/6 p-2 justify-evenly">
                < FontAwesomeIcon className='text-white h-5' icon={faVideo} />
                < FontAwesomeIcon className='text-white h-5' icon={faBell} />
                <FontAwesomeIcon className='text-white h-5' icon={faUser} />
            </div>
        </div>
    )
}

export default Header;