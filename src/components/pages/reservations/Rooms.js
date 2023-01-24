

const Rooms = ({beds, image_url}) => {
    
    return(
       <div className="rooms">
        <h1>{beds}</h1>
        <img src={image_url} alt={beds}/>
       </div>
    )
}

export default Rooms;