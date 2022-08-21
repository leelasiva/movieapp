import React from 'react'
import './landingpage.css';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

const navigate = useNavigate();

const goToLandingPage=()=>{
  navigate("/home")
}
  return (
    <div className='wrapper'>

   <div className='overlay'></div>
   <div className='content'>
   <h2 >Welcome! Fun Time is OneClick Away</h2>
   <h4> Book Your Movie Tickets From Comfort Of Your Home</h4>
   <button onClick={goToLandingPage} className='btn btn-warning font-bolder m-2'>GO CLICK!</button>
   </div>
    </div>
  )
}

export default LandingPage;