import React, { useState } from 'react'
import '../../../src/index.css';



const Login = (props) => {

//const location = useLocation();
    const { onLoginSubmit, goToSignUp,errorMessageLogin,loginMessage } = props;

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState('');
    

    const handleSubmit = (e) =>{
        const data = {userId,password};
        onLoginSubmit(data);
       e.preventDefault();
    }
   


    return (


        <div className='d-flex justify-content-center align-items-center  app'>
          
            
            <div className='overlayer'></div>
            <div>
            <h1 className='mb-2 login'>Login</h1>
                <div className='container mb-5'>
                
                    
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <input className='form-control mb-3'
                                type='text' value={userId} placeholder='Enter userId' onChange={(e) => setUserId(e.target.value)}></input>
                        </div>
                        <div className='input-group m-1'>
                            <input className='form-control mb-3'
                                type='password' value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='input-group m-1'>
                        <input className='form-control mb-3'
                            type='password' value={confirmpassword} placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                        <div className='input-group m-1'>
                            <input
                                type='submit'
                                value='Login'
                                className='form-control mt-3 btn btn-warning button h3'
                            />
                        </div>
                        <div className='input-group p-2'>
                            Don't have an account?
                            <span className=' cursor-pointer' onClick={goToSignUp}>SignUp!
                            </span>
                        </div>
                    </form>
                    <div className='error-msg text-danger'>
                    {errorMessageLogin}
                    </div>
                    <div className=' text-success'>
                    {loginMessage}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Login