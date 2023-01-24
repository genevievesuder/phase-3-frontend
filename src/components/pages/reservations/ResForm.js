

const ResForm = () => {

    const initialFormValue = {
        name: '',
        date: '',
        length_of_stay: '',
        room: ''

    }
    
    return(
       <div className="res-form">
            <label>Name</label>
            <br/>
            <input placeholder="Name on Reservation"></input>
            <br/>
            <label>Check-in</label>
            <br/>

        {/* <label>Check-In</label> */}
            <input type="date" placeholder="Check-in"></input>
       </div>
    )
}

export default ResForm;