import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {CButton} from '@coreui/react';
import './header.css';


const Header = (props) => {

  const [searchText,setSearchText] = useState("");

  const { showSearch} = props

  const navigate = useNavigate();

  const logoutFn = () =>{
    localStorage.clear();
navigate("/login?referrer=home");
  };

  const isUserLoggedin = localStorage.getItem("accessToken")
const loginFn =() =>{
  navigate("/login");
};

const searchFn = (e) =>{
  console.log(searchText);
  e.preventDefault();
  //filterMoviesBySearch(searchText);
}
  return (
    <div className=' d-flex bg-dark p-2 justify-content-between'>
    <div>
    <a                    
     className='display-6 text-warning py-1 remove-underline'
     
      href="#" onClick={()=>{navigate("/")}}>BMYT</a>
    </div>
{
  showSearch && (
    <form className='d-flex' onSubmit={searchFn}>
     <input 
     type='text'
      className='custom-input'
      value={searchText}
      onChange={(e)=>{setSearchText(e.target.value)}}/>
      <CButton 
        type='submit'
        color='warning'
         className='px-3 searchBtn'>Search</CButton>
    </form>
  )
}

    {
      isUserLoggedin ? (
        <CButton 
         type='submit'
         color='warning'
         className="px-3"
         onClick={logoutFn}>
         Logout
         </CButton>

      ):(
        <CButton 
        type='submit'
        color='warning'
        className="px-3"
        onClick={loginFn}>
        LogIn
        </CButton>
      )
    }
    </div>
  )
}

export default Header