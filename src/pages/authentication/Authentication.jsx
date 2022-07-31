import React,{useState,useEffect} from 'react'
import Login from '../../components/login/Login'
import Signup from '../../components/signup/Signup';
import './authentication.css';
import {userSignin,newUserSignup} from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { storeUserData } from '../../utils/userData';
import { ROLES } from '../../constants/userRoles';

const Authentication = (props) => {
  const [showSignup,setShowSignUp] = useState(false);
  const [loginMessage,setLoginMessage] = useState("");
  const [errorMessageLogin,setErrorMessageLogin] = useState("");
  const [errorMessageSignup,setErrorMessageSignup] = useState("");
  const navigate = useNavigate();


  const redirectToPage= userType =>{
     if(userType === ROLES.CUSTOMER){
      navigate("/customer");
     }else  if(userType === ROLES.CLIENT){
      navigate("/client");
     }else{
      navigate("/admin");
     }
 
  }

  useEffect(() => {
   
    if (localStorage.getItem("accessToken")) {
        const userType = localStorage.getItem("userTypes");
        redirectToPage(userType);
    }
}, []);

   const handleLoginSubmit = (data) =>{
    console.log(data)
     userSignin(data).then(res=>{
       console.log(res);
       const {status,message,data} = res;
        if(status === 200){
          if(message){
           setLoginMessage(message);
          }else{
              
              storeUserData(data);
              const userType = data.userTypes;
              redirectToPage(userType);
          }
        }
     }).catch(err=>{
       console.log(err);
       setErrorMessageLogin(err?.response?.data?.message || err?.message)
     })
   };
 
  
  const handleSignupSubmit = (data) =>{
     console.log(data);
    
     newUserSignup(data).then(res=>{
        console.log(res);
       const {message,status} =res;
       if(status === 201){
        setShowSignUp(false);
         setErrorMessageSignup("Signup Successful! please Login")
         }else if(message){
          setErrorMessageSignup(message);
         }
       
     }).catch(err=>{
      console.log(err);
      setErrorMessageSignup(err?.response?.data?.message || err?.message);
    });
  };
 
  const goToLogin = () =>{
    setShowSignUp(false);
  }
  const goToSignUp = () =>{
    setShowSignUp(true);
  };

  return (
    <div className='main'>
    {
      (showSignup)?(
        <Signup onSignupSubmit={handleSignupSubmit} goToLogin={goToLogin} 
        errorMessageSignup={errorMessageSignup}/>
      ):(
        <Login onLoginSubmit={handleLoginSubmit} goToSignUp={goToSignUp} 
        loginMessage={loginMessage} errorMessageLogin={errorMessageLogin}/>
      )
    }

    

    </div>
  )
}

export default Authentication