import { useState, useEffect } from 'react';
import ReservationCard from './ReservationCard';

const UserHomepage = ({setCurrentUser,currentUser, data}) => {

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

  const mappedCurrentUserData = currentUser.reservations.map(res => { 
    const room = data.find(room => room.id === res.room_id)
    return <ReservationCard 
      // {...currentUser.reservations} 
      currentUser={currentUser}
      setCurrentUser = {setCurrentUser}
      check_in={res.check_in} 
      check_out={res.check_out} 
      room={room} 
      data={data}
      key={res.id}
      reservationId={res.id}
    />})


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
