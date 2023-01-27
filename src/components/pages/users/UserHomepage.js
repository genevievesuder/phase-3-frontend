import ReservationCard from './ReservationCard';

const UserHomepage = ({setCurrentUser,currentUser, data}) => {

  const mappedCurrentUserData = currentUser.reservations.map(res => { 
    const room = data.find(room => room.id === res.room_id)
    return <ReservationCard 
      currentUser={currentUser}
      setCurrentUser = {setCurrentUser}
      check_in={res.check_in} 
      check_out={res.check_out} 
      room={room} 
      data={data}
      key={res.id}
      reservationId={res.id}
    />})


// console.log(currentUser)
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
        {mappedCurrentUserData}
    </div>
  )
}

export default UserHomepage
