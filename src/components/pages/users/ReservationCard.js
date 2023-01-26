import React from 'react'
import { useState, useEffect } from 'react'
import UpdateResForm from './UpdateResForm'

const ReservationCard = ({check_in, check_out, room, data, reservationId, setCurrentUser, currentUser}) => {
const [resRoomImg, setResRoomImg] = useState("")
const [showUpdateForm, setShowUpdateForm] = useState(false)

// const arr = [...data]
// // console.log(arr[1].image_url)
// // console.log("hi")
//   const room1 = arr[0].image_url
//   const room2 = arr[1].image_url
//   const room3 = arr[2].image_url
//   const room4 = arr[3].image_url

//   const imageFunction = () =>  {
//     if (room === 1) {
//     return setResRoomImg(room1)
//     } else if (room === 2) {
//       return setResRoomImg(room2)
//     } else if (room === 3) {
//       return setResRoomImg(room3)
//     } else {
//       return setResRoomImg(room4)
//     } 
//   }
//   imageFunction()

// PATCH
// function EditReviewForm({ review, onUpdateReview }) {
//   const [comment, setComment] = useState("");
//   const [score, setScore] = useState("0");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch(`http://localhost:9292/reviews/${review.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         comment: comment,
//         score: score,
//       }),
//     })
//       .then((r) => r.json())
//       .then((updatedReview) => onUpdateReview(updatedReview));
//   }

//   return <form onSubmit={handleSubmit}>{/* controlled form code here*/}</form>;
// }



//   return <form onSubmit={handleSubmit}>{/* controlled form code here*/}</form>;
// }


//DELETE
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
          <div className="user-left">
            <p className="user-res-room">Your Room: {room.room_name}</p>
            <p className="user-res-date">Check-in Date: {check_in} - Check-out Date: {check_out}</p>
          <button onClick = {handleShowUpdateForm} className="edit-res">Edit your Reservation</ button>
          {showUpdateForm ?  (
          <UpdateResForm        currentUser={currentUser}
          check_in ={check_in} check_out={check_out} room={room} data={data} reservationId={reservationId}/>
          ) : (null)}
          <button onClick={handleDelete} className="delete-res">Cancel your Reservation</button>
          </div>
          <div className="user-right">
            <img className="res-room-img" src={room.image_url} alt="your room" />
          </div>
        </div>
  )
}

export default ReservationCard