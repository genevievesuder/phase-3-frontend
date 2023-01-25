import {useState} from "react"
import RoomInclusions from "./RoomInclusions"

const ResForm = ({data}) => {
    const [form, showForm] = useState(false)
    const [newReservation, setNewReservation] = useState({
            room_id: "",
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            check_in: "",
            check_out:""
    })

        const handleChange = ({target: {name, value}}) => {
            setNewReservation({...newReservation, [name]: value})
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9393/reservations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newReservation)
        })
           .then(response => {
            if (response.status !== 201) {
          //     response.json()
          //     .then(reservationObj => {
          //       // debugger
          //       setReservations(currentReservations => [reservationObj.reservation, ...currentReservations])
          //     })
          //   }
          //   else {
              response.json()
              .then(messageObj => alert(messageObj.message))
            }
           })
          .catch(error => alert(error))
          setNewReservation({
            room_id: "",
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            check_in: "",
            check_out:""
          })
      }
  
    
    const handleShowForm = () => {
        showForm(currentState => !currentState); 
    }

    return(
    <div className="form-container">
        <button className="show-form-btn" onClick={handleShowForm}>Create a Reservation</button>
            {form ? (
       <div className="res-form">
        <form onSubmit={handleSubmit}> 
            <select onChange={handleChange} name="room_id">
                <option value = "">Select your Room</option>
                <option value = "1">The Aegean</option>
                <option value = "2">The Cerulean</option>
                <option value = "3">The Sapphire</option>
                <option value = "4">The Lapis Lazuli Suite</option>
            </select>

            <input onChange = {handleChange} name= "first_name" type = "text" value = {data.first_name} placeholder="First Name on Reservation"></input>
            <input onChange = {handleChange} name= "last_name" type = "text" value = {data.last_name} placeholder="Last Name on Reservation"></input>
            <input onChange = {handleChange} name= "email" type = "text" value = {data.email} placeholder="Email"></input>
            <input onChange = {handleChange} name= "phone_number" type = "text" value = {data.phone_number} placeholder="Phone Number"></input>
            <label>Check-in</label>
            <input onChange = {handleChange} name = "check_in" value = {data.check_in} type="date" placeholder="Check-in"></input> 
            <label>Check-Out</label>
            <input onChange = {handleChange} name = "check_out" value = {data.check_out} type="date" placeholder="Check-Out"></input> 
            <button type="submit" >Reserve Your Room </button>
        </form>
       </div>) : null}

             <RoomInclusions />
       </div>
            
     )
 }

export default ResForm;