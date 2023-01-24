

const Rooms = ({beds, image_url}) => {
    
    return(
        <div className="room-container">
            <div className="room-card">
                <h1>{beds}</h1>
                <img className = "bed-images" src={image_url} alt={beds}/>
            </div>
       </div>
    )
}

export default Rooms;