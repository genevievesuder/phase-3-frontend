

const Rooms = ({bed_size, room_name, image_url}) => {
    
    console.log(room_name)
    return(
        <div className="room-container">
            <div className="room-card">
                <h2 className="room-titles">{room_name}</h2>
                <img className = "bed-images" src={image_url} alt={room_name}/>
            </div>
       </div>
    )
}

export default Rooms;