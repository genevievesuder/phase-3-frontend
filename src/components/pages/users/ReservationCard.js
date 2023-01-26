import React from 'react'
import { useState, useEffect } from 'react'

const ReservationCard = ({check_in, check_out, room, data}) => {
const [resRoomImg, setResRoomImg] = useState("")

const arr = [...data]
// console.log(arr[1].image_url)
// console.log("hi")
  const room1 = arr[0].image_url
  const room2 = arr[1].image_url
  const room3 = arr[2].image_url
  const room4 = arr[3].image_url

  const imageFunction = () =>  {
    if (room === 1) {
    return setResRoomImg(room1)
    } else if (room === 2) {
      return setResRoomImg(room2)
    } else if (room === 3) {
      return setResRoomImg(room3)
    } else {
      return setResRoomImg(room4)
    } 
  }
  imageFunction()

  return (
    <div className="user-reservation-card">
          <div className="user-left">
            <p className="user-res-room">{room}</p>
            <p className="user-res-date">{check_in} - {check_out}</p>
          </div>
          <div className="user-right">
            <img className="res-room-img" src={resRoomImg} alt="your room" />
          </div>
        </div>
  )
}

export default ReservationCard