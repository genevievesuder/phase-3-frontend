import { useState } from "react";

const Rooms = ({bed_size, room_name, image_url}) => {
    const [toggleDescription, setToggleDescription] = useState(true)

    const handleHover = e => {
        console.log("working")
        setToggleDescription(currentValue => !currentValue)
    }

    return(
        <div className="room-container"  >
            
            <div className="room-card" 
                
                onMouseEnter={ handleHover}  >  
                
                {toggleDescription ? (
                <>
                    <h2 className="room-titles">{room_name}</h2>
                    <img className = "bed-images" src={image_url} alt={room_name}/> 
                </>
            ) : ( 
                <p onMouseLeave={ handleHover}>{bed_size} <br/> </p> )}
            </div>
       </div>
    )
}

export default Rooms;