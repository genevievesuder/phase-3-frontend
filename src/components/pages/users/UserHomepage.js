import { useState, useEffect } from 'react';
import ReservationCard from './ReservationCard';

const UserHomepage = ({currentUser, data}) => {

// const [welcomeMsg, setWelcomeMsg] = useState("")

// const checkForReservation = () => {
  
// }
// checkForReservation()

  // const mappedRooms = data.map(room => 
  //   <ReservationCard
  //     {...data}
  //     bed_size = {room.bed_size} 
  //     room_name= {room.room_name}
  //     image_url= {room.image_url}  
  //     key={room.id} 
  //     reservations={room.reservations}
  //   />);

    // console.log(mappedRooms)

  const mappedCurrentUserData = currentUser.reservations.map(user => 
    <ReservationCard 
      // {...currentUser.reservations} 
      check_in={user.check_in} 
      check_out={user.check_out} 
      room={user.room_id} 
      data={data}
      key={user.id}
    />)


console.log(currentUser.reservations)
  return (
    <div className="user-container">
      <div className="welcome-user">
        <h1>Welcome, {currentUser.first_name}</h1>

      {currentUser.reservations !== [] ? (
        "Your upcoming Reservations"
        ) : (
        "You currently have no reservations. Book now!")
      }

      </div>   
        {/* {mappedRooms} */}
        {mappedCurrentUserData}
    </div>
  )
}

export default UserHomepage
