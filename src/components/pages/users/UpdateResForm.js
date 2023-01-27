import React, {useState} from 'react'


const UpdateResForm = ({check_in, check_out, room, data, reservationId, currentUser, setCurrentUser}) => {

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
        fetch(`http://localhost:9393/reservations/${reservationId}`, {
          method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newReservation),
          })
          .then((r) => { 
            if (r.status === 200) {
              r.json()
              .then(updatedRes => {
                setCurrentUser(currentUser => (
                { ...currentUser, reservations: currentUser.reservations.map(res => {
                    if(res.id === updatedRes.reservation.id) {
                      return updatedRes.reservation
                    } else {
                      return res
                    }
                  })
                }))
            })} else {
              r.json()
              .then(msg => alert(msg))
            }        
          }) 
          }
        

//         (msg => {
//           setCurrentUser((currentUser) => (
//             {
//               ...currentUser, 
//               reservations: [
//                 ...currentUser.reservations.filter(r => r.id !== reservationId)
//               ]
//             }))
//         })
//       } else {
//         r.json()
//         .then(msg => alert(msg))
//       }        
//     }) 
//     // .then(() => console.log("deleted!"));
// }
      
      

  return (
    <div>
             <div className="mod-res-form-container">
        <form className="mod-res-form" onSubmit={handleEdit}> 
            <select className="mod-room-sel" value ={newReservation.room_id} onChange={handleChange} name="room_id">
                <option value = "">Select your Room</option>
                <option value = "1">The Aegean</option>
                <option value = "2">The Cerulean</option>
                <option value = "3">The Sapphire</option>
                <option value = "4">The Lapis Lazuli Suite</option>
            </select>
            {/* <br/>
            <input className="mod-select" onChange = {handleChange} name= "first_name" type = "text" value = {newReservation.first_name} placeholder="First Name on Reservation"></input><br/>
            <input className="mod-select" onChange = {handleChange} name= "last_name" type = "text" value = {newReservation.last_name} placeholder="Last Name on Reservation"></input><br/>
            <input className="mod-select" onChange = {handleChange} name= "email" type = "text" value = {newReservation.email} placeholder="Email"></input><br/>
            <input className="mod-select" onChange = {handleChange} name= "phone_number" type = "text" value = {newReservation.phone_number} placeholder="Phone Number"></input> */}
            <br/>
            <label className="mod-label">Check-in Date</label><br/>
            <input className="mod-cal" onChange = {handleChange} name = "check_in" value = {newReservation.check_in} type="date" placeholder="Check-in"></input> 
            <br/>
            <label className="mod-label">Check-Out Date</label><br/>
            <input className="mod-cal" onChange = {handleChange} name = "check_out" value = {newReservation.check_out} type="date" placeholder="Check-Out"></input> 
            <br/>
            <button className="mod-submit" type="submit" >Update Reservation</button>
        </form>
       </div>

    </div>
  )
}

export default UpdateResForm
