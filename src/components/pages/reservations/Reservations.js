import ResForm from "./ResForm";
import Rooms from "./Rooms";
import { useState } from 'react';

const Reservations = ({rooms}) => {

    const [form, showForm] = useState(false)

    
    const handleShowForm = () => {
        showForm(currentState => !currentState); 
    }
    
    const mappedRooms = rooms.map(room => <Rooms {...room} key={room.id} />);


    return(
       <div className="reservations">
            {/* <button className="show-form-btn" onClick={handleShowForm}>Create a Reservation</button>
            {form ? (
            <ResForm />
            ) : null} */}
            <ResForm />
            {mappedRooms}
       </div>
    )
}

export default Reservations;