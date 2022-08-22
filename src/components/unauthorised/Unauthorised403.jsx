import React from 'react'
import img403 from '../../assets/403.svg';
import { useNavigate } from 'react-router-dom';

const Unauthorised403 = () => {

    const navigate = useNavigate();

    const goback=()=>{
        navigate(-1);
    }

  return (
    <div className='bg-light d-flex justify-content-center align-items-center vh-100'>
    Unauthorised!!
    <img src={img403} alt=""/>
    <br/>
    <br/>
     <p>You are not Authorised to view this page, please Goback!</p>

     <div>
      <button className='btn btn-warning' onClick={()=>goback()}>goback
      </button>
     </div>
    </div>
  )
}

export default Unauthorised403