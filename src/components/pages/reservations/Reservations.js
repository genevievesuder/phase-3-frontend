import ResForm from "./ResForm";
import Rooms from "./Rooms";
import { useState } from 'react';

const Reservations = ({rooms}) => {

    const mappedRooms = rooms.map(room => <Rooms {...room} key={room.id} />);


    return(
       <div className="reservations">
            <ResForm />
            {mappedRooms}
       </div>
    )
}

export default Reservations;