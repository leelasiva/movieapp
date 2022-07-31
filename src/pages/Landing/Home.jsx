import React from 'react'
import './home.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {

const navigate = useNavigate();

const goToLoginPage=()=>{
  navigate("/login")
}
  return (
    <div className='wrapper'>

   <div className='overlay'></div>
   <div className='content'>
   <h2 >Welcome! Fun Time is OneClick Away</h2>
   <h4> Book Your Movie Tickets From Comfort Of Your Home</h4>
   <button onClick={goToLoginPage} className='btn btn-warning font-bolder m-2'>GO CLICK!</button>
   </div>
    </div>
  )
}

export default Home