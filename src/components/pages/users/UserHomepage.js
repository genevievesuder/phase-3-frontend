import { useState, useEffect } from 'react';
import ReservationCard from './ReservationCard';

const UserHomepage = ({currentUser, data}) => {

// const mappedRoomData = data.map(data => <ReservationCard {...data} key={data.id}/>)
const mappedCurrentUserData = currentUser.reservations.map(user => <ReservationCard {...currentUser.reservations} key={user.id}/>)
//   const [roomImg, setRoomImg] = useState(null)

// console.log(currentUser)
//   const checkIn = currentUser.reservations.map(res => res.check_in)
//   const checkOut = currentUser.reservations.map(res => res.check_out)
//   const resRoom = currentUser.reservations.map(res => res.room_id)
//   // const mappedRoomImages = data.map(room => room.image_url)
//   const mappedRoomName = data.map(room => room.room_name)
 
// const arr = [...data]
// // console.log(arr[1].image_url)
// // console.log("hi")
//   const room1 = arr[0].image_url
//   const room2 = arr[1].image_url
//   const room3 = arr[2].image_url
//   const room4 = arr[3].image_url

//   const imageFunction = () =>  {
//     if (resRoom === 1) {
//     return setRoomImg(room1)
//     } else if (resRoom === 2) {
//       return setRoomImg(room2)
//     } else if (resRoom === 3) {
//       return setRoomImg(room3)
//     } else {
//       return setRoomImg(room4)
//     } 
//   }
//   imageFunction()

  return (
    <div className="user-container">
      <div className="welcome-user">
        <h1>Welcome, {currentUser.first_name}</h1>
      </div>   
        {/* {mappedRoomData} */}
        {mappedCurrentUserData}
    </div>
  )
}

export default UserHomepage
