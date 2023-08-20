import './picturecard.css'

const PictureCard = ({item}) => {
  return (
   <div className="picturecard">
        <img src={item.pic} alt="" className='picHandler'/>
   </div>
  )
}

export default PictureCard