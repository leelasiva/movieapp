import React,{ useEffect,useState} from 'react'
import Seat from '../seat/Seat';
import {getSeatNumber,getTheatre2DRepresentation} from '../../utils/makeTheatre';
import SelectedSeats from '../selected-seats/SelectedSeats';
import { TICKET_PRICE } from '../../constants/config';
import './cinema.css';


const Cinema = (props) => {

  const {createBooking, setSelectedSeats,selectedSeats,occupiedSeats}= props;
   
   const [cinemaState,setCinemaState] = useState(
    getTheatre2DRepresentation(selectedSeats,occupiedSeats)
   );

   


   //console.log("from cinema.jsx",cinemaState);

   useEffect(()=>{
       const newState= getTheatre2DRepresentation(
        selectedSeats,occupiedSeats
       );
       setCinemaState(newState);
    },[selectedSeats , occupiedSeats]);

    const handleSelectSeat =(rowIndex,colIndex)=>{
        const currentStatus = cinemaState[rowIndex][colIndex];
        let finalStatus = "";
        const tempSelectedSeats = [...selectedSeats];
        const seatNo = getSeatNumber(rowIndex,colIndex);

        if(currentStatus === "available"){
            finalStatus = "selected"; //add the selected seat no to the array
            tempSelectedSeats.push(seatNo);
        }else if(currentStatus === "selected"){
          finalStatus = "available";
          //find the index of the seat no and remove it from the arr
          const seatIndex = tempSelectedSeats.indexOf(seatNo);
          tempSelectedSeats.splice(seatIndex,1);
        }else{
          finalStatus = "occupied";
        }
          const tempState = [...cinemaState];
          tempState[rowIndex][colIndex] = finalStatus;
          setCinemaState(tempState);
          setSelectedSeats(tempSelectedSeats);
    };

    const handleProceedToPayment =()=>{
        createBooking()
    };


    
  return (
    <>
    <div className='my-5 cinema'>
      {
        cinemaState.map((cinemaRow, rowIndex)=>{
          return(
            <div className='cinema-main d-flex justify-content-center'>
            <div className='cinema-row row'>

            {
              cinemaRow.map((cinemaCol,colIndex)=>{
                  const classNm = colIndex === 2 || colIndex === 6
                  ? "col-sm-1 offset-sm-2" : "col-sm-1";
                  return(
                    <div className={classNm}
                         onClick={()=>{
                          handleSelectSeat(rowIndex,colIndex);
                         }}
                       >
                       <Seat seatStatus={cinemaCol}/>
                       </div>

                  )
              })
            }
            </div>
            </div>
          )
        })
      }


    </div>
    <SelectedSeats SelectedSeatsCount = {SelectedSeats.length}
                    price={TICKET_PRICE}/>

    <button
        className= 'btn btn-warning my-3'
        disabled={SelectedSeats.length===0}
        onClick={handleProceedToPayment}>
        Proceed to Payment</button>                    
    </>
  )
}

export default Cinema