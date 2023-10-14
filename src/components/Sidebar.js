import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClockRotateLeft, faClock, faGlobe, faFireFlameCurved, faFolderOpen, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpenFlag);
  if (!isMenuOpen) return null;
  return (
    <div className="flex flex-col bg-gray-900 text-white p-3 md:w-1/6 space-y-3 border-r">
      {
        isMenuOpen && <div className="left flex flex-row w-40 p-2 justify-between items-center">
          <img src="/logo.png" alt="YT-LOGO" className='w-20' />
        </div>
      }
      <Link to="/" className="p-2 flex justify-start items-center">
        < FontAwesomeIcon className='text-white h-5 mr-6' icon={faHouse} />
        <p className='text-lg'>Home</p>
      </Link>
      <div className="p-2 flex justify-start items-center">
        < FontAwesomeIcon className='text-white h-5 mr-6' icon={faFireFlameCurved} />
        <p className='text-lg'>Shorts</p>
      </div>
      <div className="p-2 flex justify-start items-center">
        < FontAwesomeIcon className='text-white h-5 mr-6' icon={faGlobe} />
        <p className='text-lg'>Subscription</p>
      </div>
      <div className="p-2 flex justify-start items-center">
        < FontAwesomeIcon className='text-white h-5 mr-6' icon={faFolderOpen} />
        <p className='text-lg'>Library</p>
      </div>
      <div className="p-2 flex justify-start items-center">
        < FontAwesomeIcon className='text-white h-5 mr-6' icon={faClockRotateLeft} />
        <p className='text-lg'>History</p>
      </div>
      <div className="p-2 flex justify-start items-center">
        < FontAwesomeIcon className='text-white h-5 mr-6' icon={faPlay} />
        <p className='text-lg'>Your videos</p>
      </div>
      <div className="p-2 flex justify-start items-center">
        < FontAwesomeIcon className='text-white h-5 mr-6' icon={faClock} />
        <p className='text-lg'>Watch later</p>
      </div>
    </div >
  )
}

export default Sidebar