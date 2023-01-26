import ResForm from "./ResForm";
import Rooms from "./Rooms";
import { useState } from 'react';

const Reservations = ({data}) => {

    const mappedRooms = data.map(room => <Rooms 
        bed_size = {room.bed_size} 
        room_name= {room.room_name}
        image_url= {room.image_url}  
        key={room.id} 
        reservations={room.reservations}
        />);

 
    return(
       <div className="reservations">
            <ResForm data={data}/>
            {mappedRooms}
       </div>
    )
}

export default Reservations;