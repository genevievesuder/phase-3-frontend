import React, {useState} from 'react'


const UpdateResForm = ({check_in, check_out, room, data, reservationId, currentUser}) => {

    const [newReservation, setNewReservation] = useState({
        room_id: room.id,
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        email: currentUser.email,
        phone_number: currentUser.phone_number,
        check_in: check_in,
        check_out: check_out
})

    const handleChange = ({target: {name, value}}) => {
        setNewReservation({...newReservation, [name]: value})
    }
    const handleEdit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/reservations/${reservationId}`, {
          method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newReservation),
          })
            // .then((r) => r.json())
            // .then((updatedReservation) => onUpdateReservation(updatedReservation));
        }
      
      

  return (
    <div>
             <div className="res-form">
        <form onSubmit={handleEdit}> 
            <select value ={newReservation.room_id} onChange={handleChange} name="room_id">
                <option value = "">Select your Room</option>
                <option value = "1">The Aegean</option>
                <option value = "2">The Cerulean</option>
                <option value = "3">The Sapphire</option>
                <option value = "4">The Lapis Lazuli Suite</option>
            </select>

            <input onChange = {handleChange} name= "first_name" type = "text" value = {newReservation.first_name} placeholder="First Name on Reservation"></input>
            <input onChange = {handleChange} name= "last_name" type = "text" value = {newReservation.last_name} placeholder="Last Name on Reservation"></input>
            <input onChange = {handleChange} name= "email" type = "text" value = {newReservation.email} placeholder="Email"></input>
            <input onChange = {handleChange} name= "phone_number" type = "text" value = {newReservation.phone_number} placeholder="Phone Number"></input>
            <label>Check-in</label>
            <input onChange = {handleChange} name = "check_in" value = {newReservation.check_in} type="date" placeholder="Check-in"></input> 
            <label>Check-Out</label>
            <input onChange = {handleChange} name = "check_out" value = {newReservation.check_out} type="date" placeholder="Check-Out"></input> 
            <button type="submit" >Reserve Your Room </button>
        </form>
       </div>

    </div>
  )
}

export default UpdateResForm
