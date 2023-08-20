import './topbar.css'
import {FaFacebookMessenger} from 'react-icons/fa'
import { BiSearch} from 'react-icons/bi'
import {GoBell} from 'react-icons/go'
import avatar from '../../assets/avat.jpg'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <h4 className='topbarLogo'>facebook</h4>
            </div>
            <form action="">
            <input type="search" placeholder="Search..." />
            <BiSearch className='topbarSearch'/>
            </form>
            <div className="topbarRight">
                <div className="topbarRightContainer">
                <FaFacebookMessenger className='topbarRightBtn'/>
                <span className="topbarBadge">2</span>
                </div>
                <div className="topbarRightContainer">
                <GoBell className='topbarRightBtn'/>
                <span className="topbarBadge">2</span>
                </div>
                <img src={avatar} alt="avatar" className='topbarRightIcon'/>
            </div>
        </div>
    
    </div>
  )
}

export default Topbar