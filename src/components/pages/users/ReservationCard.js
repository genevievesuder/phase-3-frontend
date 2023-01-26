import React from 'react'

const ReservationCard = ({check_in, check_out, room_name}) => {
  return (
    <div className="user-reservation-card">
          <div className="user-left">
            <p className="user-res-room">{room_name}</p>
            <p className="user-res-date">{check_in} - {check_out}</p>
          </div>
          <div className="user-right">
            {/* <img className="res-room-img" src={roomImg} alt="your room" /> */}
          </div>
        </div>
  )
}

export default ReservationCard