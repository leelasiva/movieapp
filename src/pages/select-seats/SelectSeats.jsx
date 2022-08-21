import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/movies';
import { getTheaterById } from '../../api/theatres';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Screen from '../../components/screen/Screen';
import SeatGuide from '../../components/seatGuide/SeatGuide';
import { DEFAULT_OCCUPIED_SEATS, TICKET_PRICE } from '../../constants/config';
import './selectSeats.css';
import Cinema from '../../components/cinema/Cinema';
import Payment from '../../components/payment/Payment';
import { createNewBooking, makePaymentForBooking } from '../../api/booking';

const SelectSeats = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [theatreDetails, setTheatreDetails] = useState({});
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [occupiedSeats, setOccupiedSeats] = useState(DEFAULT_OCCUPIED_SEATS);
  const [bookingDetail, setBookingDetail] = useState({});
  const [paymentDetail, setPaymentDetail] = useState({});
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);


  const params = useParams();
  const { movieId, theatreId } = params;

  

  const createBooking = async () => {
    const bookingData = {
      theatreId,
       movieId,
      noOfSeats: selectedSeats.length,
      timing: new Date().toLocaleDateString(),
    }

    const res = await createNewBooking(bookingData);
    console.log("BookingDetail", res);
    const { data, status } = res;
    if (status === 201) {
      setBookingDetail(data);

    }
    setConfirmationModal(true);
    setPaymentSuccessful(false);
  };

  const handlePostPayment = () => {
    /*after completing the payment
      1.close the Modal
      2.push the selected seats to occupied seats
      3.empty the selected seats
      4.setPayment Successful to false
    */
    setConfirmationModal(false);
    const tempOccupiedSeats = [...occupiedSeats];
    selectedSeats.forEach(seat => {
      tempOccupiedSeats.push(seat);
    });
    setOccupiedSeats(tempOccupiedSeats);
    setSelectedSeats([]);
    setPaymentSuccessful(false);
  };

  useEffect(() => {
    fetchMovieDetails(movieId);
    fetchTheatreDetails(theatreId);
  }, []);

  const fetchMovieDetails = movieId => {
    getMovieDetails(movieId).then(res => {
      console.log(res);
      const { status, data } = res;
      if (status === 200) {
        setMovieDetails(data);
      }
    }).catch(err => {
      console.log(err.message);
    });
  };

  const fetchTheatreDetails = theatreId => {
    getTheaterById(theatreId).then(res => {
      console.log(res);
      const { status, data } = res;
      if (status === 200) {
        setTheatreDetails(data);
      }
    }).catch(err => {
      console.log(err.message);
    })
  };

  console.log("data in bookingDetail", bookingDetail);
  const handleconfirmPayment = async () => {
    const paymentData = {
       bookingId: bookingDetail._id,
       amount:TICKET_PRICE * selectedSeats.length,
    };

    const res = await makePaymentForBooking(paymentData);
    console.log(res);
    const { data, status } = res;
    if (status === 201) {
        setPaymentDetail(data);
        setPaymentSuccessful(true);
    }
};
  const { name: movieName } = movieDetails;
  const { name: theatreName } = theatreDetails;

  return (
    <div>
      <div className='select-seats-main min-vh-100'>
        <div><Header /></div>
        <h2 className='text-dark'>
          {movieName} - {theatreName}
        </h2>
        <SeatGuide />
        <Screen />
        <Cinema createBooking={createBooking}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          occupiedSeats={occupiedSeats} />

        <Payment
          confirmationModal={confirmationModal}
          setConfirmationModal={setConfirmationModal}
          selectedSeats={selectedSeats}
          movieName={movieName}
          theatreName={theatreName}
          handleconfirmPayment={handleconfirmPayment}
          paymentSuccessful={paymentSuccessful}
          setPaymentSuccessful={setPaymentSuccessful}
          handlePostPayment={handlePostPayment} />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default SelectSeats