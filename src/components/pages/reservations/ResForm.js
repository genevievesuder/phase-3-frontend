import {useState} from "react"
import RoomInclusions from "./RoomInclusions"

const ResForm = () => {
    const [form, showForm] = useState(false)
    const [newReservation, setNewReservation] = useState({
            room: "",
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
          .then(response => response.json())
          .then(newData => setNewReservation(currentReservations =>
            [newData, ...currentReservations]))
          .catch(error => alert(error))
          setNewReservation({
            room: "",
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
            <label>Name</label>
            <select name="">
                <option value = "Room 1"></option>
                <option value = "Room 2"></option>
                <option value = "Room 3"></option>
                <option value = "Room 4"></option>

            </select>
            <input onChange = {handleChange} name= "first_name" type = "text" value = {first_name} placeholder="First Name on Reservation"></input>
            <input onChange = {handleChange} name= "last_name" type = "text" value = {last_name} placeholder="Last Name on Reservation"></input>
            <input onChange = {handleChange} name= "email" type = "text" value = {email} placeholder="Email"></input>
            <input onChange = {handleChange} name= "phone_number" type = "text" value = {phone_number} placeholder="Phone Number"></input>
            <label>Check-in</label>
            <input onChange = {handleChange} name = "check-in" type="date" placeholder="Check-in"></input> 
            <label>Check-Out</label>
            <input onChange = {handleChange} name = "check-out" type="date" placeholder="Check-Out"></input> 
            <button type="submit" >Reserve Your Room </button>
        </form>
       </div>) : null}

            <RoomInclusions />
       </div>
            
    )
}

export default ResForm;