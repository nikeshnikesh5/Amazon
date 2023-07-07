import React, { useState } from 'react'
import './Login.css'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

const Login = () => {

    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const[password,setpassword] = useState('');
    

    const signIn = e => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
        console.log(auth);
        if(auth){
           navigate('/')
        }
    })
    .catch(error => alert(error.message))

   }

const register = e => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        console.log(auth);
        if(auth){
           navigate('/')
        }
    })
    .catch(error => alert(error.message))

  

         //do some fancy firebase register shitttt......
}

  return (
    <div className='login'>
        <Link to='/'>
        

        <img className='login__logo' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-768x480.png"></img>
        </Link>
        <div className='login__container'>
 
            <h1>Sign-In</h1>
            <form>
                <h5>
                    E-mail
                </h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>
                    Password
                </h5>
                <input type='password' value={password} onChange={e => setpassword(e.target.value)}/>
                <button onClick={signIn}className='login__signIn__button'>Sign In</button>
                {/* <button type='submit' onClick={signIn}>Sign In</button> */}
            </form>
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>

            <button onClick={register}className='login__register__button'>Create your amazon Account</button>
        </div>
    </div>
  )
}

export default Login