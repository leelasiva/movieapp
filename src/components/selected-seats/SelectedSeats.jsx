import React from 'react'

const SelectedSeats = (props) => {
   const {selectedSeatCount , price} = props;
    
  return (
    selectedSeatCount > 0 && (
        <div className='p-4 text-light my-5 bg-dark'>
        <span>
           you have selected 
           <span className='text-info'>
             {selectedSeatCount}
           </span>
           seats. Toatal amount is Rs.
           <span className='text-info'>
           {price * selectedSeatCount}
           </span>
        </span>
        </div>
    )
  )
}

export default SelectedSeats