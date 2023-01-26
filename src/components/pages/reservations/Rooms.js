import { useState } from "react";

const Rooms = ({bed_size, room_name, image_url, k}) => {
    const [toggleDescription, setToggleDescription] = useState(true)

    const handleClick = e => {
        console.log("working")
        setToggleDescription(currentValue => !currentValue)
    }

    return(
        <div className="room-container">
            <div className="room-card">
                <h2 className="room-titles">{room_name}</h2>
                {toggleDescription ? <img onClick = {handleClick} className = "bed-images" src={image_url} alt={room_name}/> : <p onClick={handleClick}>{bed_size} <br/> {}</p> }
            </div>
       </div>
    )
}

export default Rooms;