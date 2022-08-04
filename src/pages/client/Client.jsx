import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import TheatresList from '../../components/theatres/TheatresList'
import './client.css'


const Client = () => {

   const  name = localStorage.getItem("name");

  return (
    <div>
    <div className='over-layer'></div>
    <div>
     <Header/>
     </div>
     <div className='client-main'>
        <h2>Welcome! {name}</h2>
        <h4>Please have a look at the data below</h4>
        <TheatresList/>
     </div>
     <Footer/>
    </div>
  )
}

export default Client