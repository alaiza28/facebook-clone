import "./home.css";
import avatar from "../assets/avat.jpg";
import { FaVideo } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import PostContent from "../components/PostContent";
// import dummy from "../components/dummyPostData.js"
import {FaTrash} from 'react-icons/fa'
import { useState } from "react";
import { v4 as uuid } from "uuid";
import avatar1 from "../assets/bppp.jpg";
import avatar2 from "../assets/jisoo.jpg";
import avatar3 from "../assets/jen.jpg";
import addFriend from "../components/friends";
import AddFriend from "../components/AddFriend/AddFriend";
import {BsThreeDotsVertical, BsShareFill} from 'react-icons/bs'
import {AiFillLike} from 'react-icons/ai'
import {GoComment} from 'react-icons/go'


const Home = ({ data, setData }) => {
  // const [post, setPost] = useState("");

  // const handlePost = (e) => {
  //   e.preventDefault();
  //   if (post) {
  //     const posts = { id: uuid(), post };

  //     setData((prevData) => [posts, ...prevData]);
  //     setPost(e.target.value);
  //   }
  // };

  const [post, setPost] = useState([]);
  const [text, setText] = useState("");
  const [friends, setFriends] = useState(addFriend)

  const handleNewText = (e) =>{
    e.preventDefault()
    setText(e.target.value)
  }

  const addPost = (e) => {
  
  if(text){
    const newTxt = {id: uuid(), text}
    
    const newPost = [...post, newTxt]
    setPost(newPost)
  }
}


const handleDelete = (id) => {
   const filteredPost = post.filter(posts => posts.id !== id);
   setPost(filteredPost)
}

const handleFriend = (id) =>{
 
 const newFriend = friends.filter((friend) => friend.id !== id);

 setFriends(newFriend);
}

  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="homeLeft">
          <div className="homePost">
            <div className="homeForm">
              <form action="" className="formHome">
                <img src={avatar} alt="" className="homeAvatar" />
                <input
                  type="text"
                  placeholder="Whats on your mind?"
                  className="homeInput"
                  onChange={handleNewText}
                />
              </form>
              <button className="homePostItem" onClick={addPost}>
                Post
              </button>
            </div>

            <hr className="homeHr" />
            <div className="homeButtonContainer">
              <div className="homeButton">
                <div className="homeContent">
                  <FaVideo className="icon red" />
                  <h3 className="homeButtonTitle">Live Video</h3>
                </div>
                <div className="homeContent">
                  <AiFillPicture className="icon green" />
                  <h3 className="homeButtonTitle">Live Video</h3>
                </div>
                <div className="homeContent">
                  <MdOutlineInsertEmoticon className="icon orange" />
                  <h3 className="homeButtonTitle">Feeling/Activity</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="homePostContent">
           { /*{data.map((data) => (
              <PostContent
                data={data}
                key={data.id}
                setPost={setPost}
                setData={setData}
              />
           ))}*/}
          {
            post.map((posts) => {
              return  <div className="postcontent" key={posts.id}>
              <div className="postContentTop">
              <div className="postContentAcc">
                  <div className="postContentLeft">
                      <img src={avatar} alt="" className='postAvatar' />
      
                      <p className="avatarName">Alaiza Gondraneos</p>
                  </div>
      
                  <div className="postContentRight">  
                      <FaTrash className='postMenu trash' onClick={() => handleDelete(posts.id)}/>
                  </div>
              </div>
              </div>
              <form htmlFor="" className="postContentMid" >
             <h4 className="postContentText">{posts.text}</h4>
              </form>
              <div className="postContentBot">
                  <div className="postContentIcons">
                      <AiFillLike className='postMenu like'/>
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
            })
          }
          </div>
        </div>
        <div className="homeRight">
          <div className="homeRightWrapper">
            <h4 className="homeRightTitle">Sponsored</h4>
            <div className="homeTop">
              <div className="homeTopContent">
                <img src={avatar1} alt="" className="homeSponsored" />
                <div className="homeSponsoredText">
                  <h3>BLACKPINK</h3>
                  <h4>korea.kr</h4>
                </div>
              </div>

              <div className="homeTopContent">
                <img src={avatar2} alt="" className="homeSponsored" />
                <div className="homeSponsoredText">
                  <h3>JISOO</h3>
                  <h4>korean.ks</h4>
                </div>
              </div>
            </div>

            <div className="homeBot">
              <div className="homeNav">
                <h3 className="homeRightTitle friend">Friend's List</h3>
                <h5 className="homeSmall">See All</h5>
              </div>
              {
                friends.map((friend) => {
                  return <div className="homeBotContent" key={friend.id}>
                  <div className="homeBotAvatar">
                    <img src={friend.picture} alt="" className="homeBotAvatar" />
                  </div>
                  <div className="homeBotInfo">
                    <h3 className="homeBotName">{friend.name}</h3>
                    <div className="homeBotInfoBtn">
                      <button className="homeBotBtns blue">Confirm</button>
                      <button className="homeBotBtns red" onClick={() => handleFriend(friend.id)}>Delete</button>
                    </div>
                  </div>
                </div>
                })
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
