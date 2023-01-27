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
              response.json()
              .then(messageObj => alert(messageObj.message))
            } else {
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
           })
          .catch(error => alert(error))
      }
  
    
    const handleShowForm = () => {
        showForm(currentState => !currentState); 
    }

    return(
    <div className="form-container">
        <button className="show-form-btn" onClick={handleShowForm}>Create a Reservation</button>
            {form ? (
       <div className="res-form-div">
        <form className="res-form" onSubmit={handleSubmit}> 
            <select className="form-selects" onChange={handleChange} name="room_id">
                <option value = "">Select your Room</option>
                <option value = "1">The Aegean</option>
                <option value = "2">The Cerulean</option>
                <option value = "3">The Sapphire</option>
                <option value = "4">The Lapis Lazuli Suite</option>
            </select>

            <input className="form-selects" onChange = {handleChange} name= "first_name" type = "text" value = {newReservation.first_name} placeholder="First Name on Reservation"></input>
            <input className="form-selects" onChange = {handleChange} name= "last_name" type = "text" value = {newReservation.last_name} placeholder="Last Name on Reservation"></input>
            <input className="form-selects" onChange = {handleChange} name= "email" type = "text" value = {newReservation.email} placeholder="Email"></input>
            <input className="form-selects" onChange = {handleChange} name= "phone_number" type = "text" value = {newReservation.phone_number} placeholder="Phone Number"></input>
            {/* <label className="form-label">Check-in</label> */}
            <input className="date-selects" onChange = {handleChange} name = "check_in" value = {newReservation.check_in} type="date" placeholder="Check-in"></input> 
            {/* <label className="form-label">Check-Out</label> */}
            <input className="date-selects" onChange = {handleChange} name = "check_out" value = {newReservation.check_out} type="date" placeholder="Check-Out"></input> 
            <button className="form-submit-btn" type="submit" >Reserve Your Room </button>
        </form>
       </div>) : null}

             <RoomInclusions />
       </div>
            
     )
 }

export default ResForm;