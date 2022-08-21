import React from 'react'
import Seat from '../seat/Seat';
import './seatGuide.css';

const SeatGuide = () => {
  return (
    <div className='d-flex justify-content-center m-2'>
     <div className='bg-dark p-2 d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
        <Seat seatStatus= 'available'/>
          <span className='text-light'>Available</span>
        </div>
        <div className='d-flex align-items-center'>
        <Seat seatStatus= 'selected'/>
          <span className='text-light'>Selected</span>
        </div>
        <div className='d-flex align-items-center'>
        <Seat seatStatus= 'occupied'/>
          <span className='text-light'>Occupied</span>
        </div>
     </div>
    </div>
  )
}

export default SeatGuide