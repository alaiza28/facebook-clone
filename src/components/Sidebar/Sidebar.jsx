import "./sidebar.css";
import { Link } from "react-router-dom";
import Home from '../../pages/Home'
import Account from "../../pages/Account/Account";
//import { NavLink } from "react-router-dom";
import avatar from "../../assets/avat.jpg";
import sidebar from "../../assets/sidebaravatar.jpg";
import { AiFillHome } from "react-icons/ai";
import { MdStoreMallDirectory, MdVideoLibrary } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { RxDragHandleDots2 } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <div className="sidebarTop">
             <Link to="/" element={<Home />} className="sidebarTopLink">
             <li className="sidebarListItem">
             <AiFillHome className="sidebarIcons" />
             Home
           </li>
             
             </Link>

              <Link to="/account" element={<Account />} className="sidebarTopLink">
              <div className="sidebarIconn">
              <img src={avatar} alt="" className="avatar" />
              <h4 className="sidebarName">Alaiza Gondraneos</h4>
            </div>
              </Link>
            </div>

            <hr />

            <li className="sidebarListItem">
              <MdVideoLibrary className="sidebarIcons" />
              Watch
            </li>

            <li className="sidebarListItem">
              <MdStoreMallDirectory className="sidebarIcons" />
              Market
            </li>

            <li className="sidebarListItem">
              <GrGroup className="sidebarIcons icon" />
              Sales
            </li>

            <li className="sidebarListItem">
              <RxDragHandleDots2 className="sidebarIcons" />
              See More
            </li>
          </ul>
        </div>


        <hr />
        <div className="sidebarMenuCon">
          <div className="sidebarMenuContainer">
            <img src={sidebar} alt="" className="sidebarIcon" />
            <h4 className="sidebarTag">URSB CCS DAY</h4>
          </div>

          <div className="sidebarMenuContainer">
            <img src={sidebar} alt="" className="sidebarIcon" />
            <h4 className="sidebarTag">BLACKPINK PHILIPPINES</h4>
          </div>

          <div className="sidebarMenuContainer">
            <img src={sidebar} alt="" className="sidebarIcon" />
            <h4 className="sidebarTag">CCS STUDENT</h4>
          </div>

          <div className="sidebarMenuContainer">
            <img src={sidebar} alt="" className="sidebarIcon" />
            <h4 className="sidebarTag">FARMVILLE</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
