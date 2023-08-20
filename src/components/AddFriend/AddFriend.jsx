import './addfriend.css';



const AddFriend = ({friend, setFriend}) => {
  return (
    <div className="homeBotContent">
    <div className="homeBotAvatar">
      <img src={friend.picture} alt="" className="homeBotAvatar" />
    </div>
    <div className="homeBotInfo">
      <h3 className="homeBotName">{friend.name}</h3>
      <div className="homeBotInfoBtn">
        <button className="homeBotBtns blue">Confirm</button>
        <button className="homeBotBtns red">Delete</button>
      </div>
    </div>
  </div>
  )
}

export default AddFriend

