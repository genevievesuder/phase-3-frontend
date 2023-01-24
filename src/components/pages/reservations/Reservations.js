import ResForm from "./ResForm";
import Rooms from "./Rooms";
import { useState, useEffect } from 'react';

const Reservations = () => {

    const [form, showForm] = useState(false)
    const [rooms, setRooms] = useState([])
    
    const handleShowForm = () => {
        showForm(currentState => !currentState); 
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch("http://localhost:3000/rooms")
            const data = await resp.json()
            setRooms(data)
          } catch (error) {
            alert(error)
          }
      }
      fetchData()
      }, []);

    
    const mappedRooms = rooms.map(room => <Rooms {...room} key={room.id} />);


    return(
       <div className="reservations">
        <h1>Reservations</h1>
        <button className="show-form-btn" onClick={handleShowForm}>Create a Reservation</button>
        {form ? (
        <ResForm />
        ) : null}
        {mappedRooms}
       </div>
    )
}

export default Reservations;