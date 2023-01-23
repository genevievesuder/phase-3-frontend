import ResForm from "./ResForm";
import { useState } from 'react';

const Reservations = () => {

    const [form, showForm] = useState(false)
    
    const handleShowForm = () => {
        showForm(currentState => !currentState); 
    }



    return(
       <div className="reservations">
        <h1>Reservations</h1>
        <button className="show-form-btn" onClick={handleShowForm}>BUTTON</button>
        {form ? (
        <ResForm />
        ) : null}
        
       </div>
    )
}

export default Reservations;