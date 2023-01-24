// import ResForm from "./ResForm";
// import Rooms from "./Rooms";
// import { useState } from 'react';

const Reservations = ({data}) => {

    // const [form, showForm] = useState(false)

    
    // const handleShowForm = () => {
    //     showForm(currentState => !currentState); 
    // }
    
    // const mappedRooms = rooms.map(room => <Rooms {...room} key={room.id} />);


    return(
       <div className="reservations">
        <h1>Reservations</h1>
        {/* <button className="show-form-btn" onClick={handleShowForm}>Create a Reservation</button>
        {form ? (
        <ResForm />
        ) : null}
        {mappedRooms} */}
       </div>
    )
}

export default Reservations;