import {useState} from "react"
import RoomInclusions from "./RoomInclusions"

const ResForm = () => {

    const [form, showForm] = useState(false)

    
    const handleShowForm = () => {
        showForm(currentState => !currentState); 
    }

    return(
    <div className="form-container">
        <button className="show-form-btn" onClick={handleShowForm}>Create a Reservation</button>
            {form ? (
       <div className="res-form">
            <label>Name</label>
            <input placeholder="Name on Reservation"></input>
            <label>Check-in</label>
            <input type="date" placeholder="Check-in"></input> 
            <label>Check-Out</label>
            <input type="date" placeholder="Check-Out"></input> 
       </div>) : null}
            <RoomInclusions />
       </div>
            
    )
}

export default ResForm;