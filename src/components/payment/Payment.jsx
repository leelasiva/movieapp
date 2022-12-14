import React from 'react'
import {Modal} from "react-bootstrap";
import { TICKET_PRICE } from '../../constants/config';
import successful from "../../assets/simpson.gif";


const Payment = (props) => {

    const {
        confirmationModal,
        setConfirmationModal=()=>{},
        selectedSeats= [],
        movieName,
        theatreName,
        handleconfirmPayment,
        paymentSuccessful,
        setPaymentSuccessful,
        handlePostPayment,
    } = props;
  return (
    <div>
    {
        confirmationModal && (
            <Modal
            show={confirmationModal}
            onHide={()=>{
              setConfirmationModal(false);
              setPaymentSuccessful(false);
             }}
             backdrop="static"
             keyboard={false}
             centered>
            <Modal.Header>
            <Modal.Title>
            <div className="p-2">
              {paymentSuccessful ? "Congratulations Booking confirmed!!" :"please confirm your Booking"}

            </div>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {
                paymentSuccessful && (
                    <>
                     
                    <div className='d-flex justify-content-center text-align-center'>
                       <div className="payment-successful">
                       <img alt="" src={successful}/>
                       </div>
                     </div>
                     <hr/>

                    </>
                )
            }
            <div className='row p-2'>
              <div className='col-sm-4'>Movie Name:  </div>
              <div className='col-sm-8'>{movieName}</div>
            </div>
            <div className='row p-2'>
            <div className='col-sm-4'>Theatre Name:  </div>
            <div className='col-sm-8'>{theatreName}</div>
          </div>
          <div className='row p-2'>
            <div className="col-sm-4">selected seats: </div>
            <div className="col-sm-8">
            {selectedSeats.join(",")} (
                {selectedSeats.length} seats
            )
            </div>
          </div>
          <div className="row p-2">
            <div className="col-sm-4">Total Price:</div>
             <div className="col-sm-8">
             {TICKET_PRICE * selectedSeats.length}
             </div>
          </div>
            </Modal.Body>
            <Modal.Footer>
              {!paymentSuccessful && (
                <>
                  <button
                  className='btn btn-secondary'
                  onClick={()=>{
                    setConfirmationModal(false);
                    setPaymentSuccessful(false);
                  }}>Cancle
                  </button>
                  <button
                  className='btn btn-warning'
                  onClick={handleconfirmPayment}>Confirm
                  </button>
                </>
              )}
              {paymentSuccessful && (
                <button
                className='btn btn-warning'
                onClick={()=>{
                    handlePostPayment();
                }}>Close</button>
              )}
            </Modal.Footer>
            </Modal>
        )
    }
    </div>
  )
}

export default Payment