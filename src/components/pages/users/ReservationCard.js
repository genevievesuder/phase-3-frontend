import React from 'react'
import { useState, useEffect } from 'react'
import UpdateResForm from './UpdateResForm'

const ReservationCard = ({check_in, check_out, room, data, reservationId, setCurrentUser, currentUser}) => {
const [showUpdateForm, setShowUpdateForm] = useState(false)

const handleDelete = () => {
    fetch(`http://localhost:9393/reservations/${reservationId}`, {
      method: "DELETE",
    })
      .then((r) => { 
        if (r.status === 200) {
          r.json()
          .then(msg => {
            setCurrentUser((currentUser) => (
              {
                ...currentUser, 
                reservations: [
                  ...currentUser.reservations.filter(r => r.id !== reservationId)
                ]
              }))
          })
        } else {
          r.json()
          .then(msg => alert(msg))
        }        
      }) 
      // .then(() => console.log("deleted!"));
}
console.log(reservationId)

const handleShowUpdateForm = () => {
  setShowUpdateForm(currentValue => !currentValue)
}
  
  return (
    <div className="user-reservation-card">
      <span className="res-title">Your upcoming stay at the {room.room_name}</span>
          <div className="user-left">
            <p className="user-res-details">Reservation Details<br/>Check-in: {check_in} - Check-out: {check_out}<br/>
            {room.room_name} at Hotel Azure <br/>This room has {room.bed_size} {currentUser.email}
            </p>
          <button className="show-mod-form-btn" onClick = {handleShowUpdateForm}>Modify this Reservation</ button>
          {showUpdateForm ?  (
          <UpdateResForm        
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            check_in ={check_in} 
            check_out={check_out} 
            room={room} 
            data={data} 
            reservationId={reservationId}/>
          ) : (null)}
          <button onClick={handleDelete} className="del-res-btn">Cancel this Reservation</button>
          </div>
          <div className="user-right">
            <img className="res-room-img" src={room.image_url} alt="your room" />
          </div>
        </div>
  )
}

export default ReservationCard