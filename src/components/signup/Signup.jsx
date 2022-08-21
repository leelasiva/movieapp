import React,{useState} from 'react'
import { ROLES } from '../../constants/userRoles';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import './signup.css';

const Signup = (props) => {
  const {onSignupSubmit, goToLogin,errorMessageSignup} = props;

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userType,setUserType] = useState(ROLES.CUSTOMER);
  

  const handleSignupSubmit = (e) =>{
    const data ={
        userId,password, name:userName,email,userType
    }
    onSignupSubmit(data);
    e.preventDefault();
  }


  return (

      <div className='d-flex justify-content-center align-items-center  app'>
      <div className='overlayer'></div>
          <div className=' p-1'>
              <h1 className='p-3 signup'>Register</h1>
              <div className='container mb-5'>
              <form onSubmit={handleSignupSubmit}>
                  <div className='input-group m-1'>
                      <input className='form-control m-1'
                          type='text' value={userId} placeholder='Enter userId' onChange={(e) => setUserId(e.target.value)}></input>
                  </div>
                  <div className='input-group m-1'>
                      <input className='form-control m-1'
                          type='password' value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className='input-group m-1'>
                      <input className='form-control m-1'
                          type='text' value={userName} placeholder='UserName' onChange={(e) => setUserName(e.target.value)} />
                  </div>
                  <div className='input-group m-1'>
                      <input className='form-control m-1'
                          type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className='col d-flex justify-content-center align-items-center'>
                  <label className='p-2' style={{fontSize:'17px'}}>UserType:</label>
                  <DropdownButton
                  align='end'
                  title={userType}
                  id='userType'
                  className='m-2'
                  onSelect={val => {
                    setUserType(val);
                  }}
                  variant='light'>
                  <Dropdown.Item eventKey={ROLES.CUSTOMER}>{ROLES.CUSTOMER}
                  </Dropdown.Item>
                  <Dropdown.Item eventKey={ROLES.CLIENT}>{ROLES.CLIENT}
                  </Dropdown.Item>
                  </DropdownButton>
                  </div>
                  <div>
                  </div>
                  <div className='input-group'>
                      <input
                          type='submit'
                          value='Create'
                          className='form-control m-1 btn button'
                      />
                  </div>
                  <div className='input-group p-2'>
                  Already have an account?
                  <span className='  cursor-pointer ml-4' onClick={goToLogin}>Login!
                  </span>
              </div>
              
              </form>
              <div className='error-msg text-danger m-1'>
              {errorMessageSignup}
          </div>
              </div>
          </div>
      </div>
  )
}

export default Signup

