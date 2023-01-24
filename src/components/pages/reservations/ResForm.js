

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


            
      <h3>Add a Pokemon!</h3>
      {/* <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
            onChange ={handleInput}/>
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp}
            onChange ={handleInput}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange ={handleInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange ={handleInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form> */}
       </div>
    )
}

export default ResForm;