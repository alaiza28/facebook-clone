import './account.css'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import {FaPencilAlt} from 'react-icons/fa'
import avatar from '../../assets/avat.jpg'
import img1 from '../../assets/jen.jpg'
import img2 from '../../assets/jisoo.jpg'
import img3 from '../../assets/lisa.jpg'
import img4 from '../../assets/Rosie.jpg'
import {BsThreeDots} from 'react-icons/bs'
import {FaHome} from 'react-icons/fa'
import {AiFillCaretDown, AiFillHeart} from 'react-icons/ai'
import {GiGraduateCap} from 'react-icons/gi'
import pictures from '../../components/importPictures'
import PictureCard from '../../components/PictureCard'


const Account = () => {
  return (
    <div className='account'>
      <div className="accountWrapper">
          <div className="accountTop">
              <div className="accountTopTop">
              {  /* <img src={tree} className="accountBg" alt="" />*/}
              </div>
              <div className="accountTopBot">
                <div className="accountAvatar">
                <div className="accountDetails">
                  <div className="avatarCon">
                  <img src={avatar} alt="" className='avatarAcc'/>
                  </div>
                    <div className="avCon">
                    <h4 className="accountName">Alaiza Gondraneos</h4>
                    <p className="accountDet">
                    1.2K Friends
                    </p>
                    <div className="accountFriends">
                      <img src={img1} alt="" className="accFrnds" />
                      <img src={img2} alt="" className="accFrnds" />
                      <img src={img3} alt="" className="accFrnds" />
                      <img src={img4} alt="" className="accFrnds" />
                    </div>  
                    </div>           
                  </div>
                
                <div className="accountSideBtn">
                  <button className="accountBtn blue"><AiOutlinePlus className='accountIcons'/>Add to Story</button>
                  <button className="accountBtn gray"><FaPencilAlt className='accountIcons'/>Edit Account</button>
                </div>
                </div>

              </div>
              <hr className="acc" />
              <div className="accountTopBtn">
                  <div className="accTopLeft">
                    <ul className="accList">
                      <li className="accListItem">Posts</li>
                      <li className="accListItem">About</li>
                      <li className="accListItem">Friends</li>
                      <li className="accListItem">Photos</li>
                      <li className="accListItem">Videos</li>
                      <li className="accListItem">Check-ins</li>
                      <li className="accListItem">More <AiFillCaretDown /></li>
                    </ul>
                  </div>
                  <div className="accountTopRight"><BsThreeDots className='accTopRightIcon'/></div>
              </div>
          </div>

          <div className="accountBotContainer">
          <div className="accountLeftSide">
            <div className="accLeftSideBox">
              <h4 className="accLeftName">Intro</h4>
              <button className="accEdit">Edit Bio</button>

              <div className="accLeftBtn">
                <div className="accLeftBtnItems">
                    <GiGraduateCap className='accLeftIcon'/>
                    <h4 className="btnName">Went to Janosa National High School</h4>
                </div>

                <div className="accLeftBtnItems">
                    <FaHome className='accLeftIcon'/>
                    <h4 className="btnName">Talim Island</h4>
                </div>

                <div className="accLeftBtnItems">
                    <MdLocationOn className='accLeftIcon'/>
                    <h4 className="btnName">Binangonan Rizal</h4>
                </div>

                <div className="accLeftBtnItems">
                    <AiFillHeart className='accLeftIcon'/>
                    <h4 className="btnName">Single</h4>
                </div>
              </div>

              <div className="accLeftEditBtn">
              <button className="accEdit">Edit Details</button>
              <button className="accEdit">Add Hobbies</button>
              <button className="accEdit">Add Featured</button>
              </div>
            </div>
            <div className="accPicturesContainer">
            <div className="accPicHeader">
              <h4 className="accLeftName">Photos</h4>
              <p className="accSeeAll">See all photos</p>
            </div>
            <div className="picContent">
              {
                pictures.map(item => <PictureCard item={item} key={item.data}/>)
              }
            </div>
          </div>
       </div>

        <div className="accountRightSide">
        <div className="accRightSideBox">
        
        </div>
        </div>

       
          </div>
      </div>
    </div>
  )
}

export default Account