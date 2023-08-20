import './postcontent.css'
import avatar from '../assets/avat.jpg'
import {BsThreeDotsVertical, BsShareFill} from 'react-icons/bs'
import {AiFillLike} from 'react-icons/ai'
import {GoComment} from 'react-icons/go'
import {FaTrash} from 'react-icons/fa'
import { useParams } from 'react-router-dom'


const PostContent = ({data,posts,setPost, setData}) => {

  const handleDelete = (id) => {
    const newTextMap = posts.find((post) => post.id === id)

    const newTextFiltered = newTextMap.filter((item) => item.id !== id)

    
   
  }
  return (
    <div className="postcontent">
        <div className="postContentTop">
        <div className="postContentAcc">
            <div className="postContentLeft">
                <img src={avatar} alt="" className='postAvatar' />

                <p className="avatarName">Alaiza Gondraneos</p>
            </div>

            <div className="postContentRight">  
                <BsThreeDotsVertical onClick={() =>handleDelete(posts.id)} className='postMenu'/>
            </div>
        </div>
        </div>
        <form htmlFor="" className="postContentMid" >
       <h4 className="postContentText">{posts.text}</h4>
        </form>
        <div className="postContentBot">
            <div className="postContentIcons">
                <AiFillLike className='postMenu'/>
                <p className="postBtn">Like</p>
            </div>
            <div className="postContentIcons">
                <GoComment className='postMenu'/>
                <p className="postBtn">Comment</p>
            </div>
            <div className="postContentIcons">
                <BsShareFill className='postMenu'/>
                <p className="postBtn">Share</p>
            </div>
        </div>
    </div>
  )
}

export default PostContent