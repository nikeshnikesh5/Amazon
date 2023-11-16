
import './App.css';
import Header from './Header';
import Home from './Home';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Root from './Root';
import CheckoutRoot from './CheckoutRoot';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import PaymentRoot from './PaymentRoot';


///fir
function App(props) {
 const [{},dispatch] = useStateValue();


 useEffect(()=>{
     auth.onAuthStateChanged(authUser =>{

      console.log('The User is >>>',authUser);
      if(authUser){
        // the user just logged in / the user was logged in 
     dispatch({
      type:'SET_USER',
      user:authUser
     })
      } else{
               // the user is logged out
       dispatch({
        type:'SET_USER',
        user:null
       })
      }

     })
 },[])


  return (
    // BEM Convenction



<div className="app">
<BrowserRouter>
<Routes>
  <Route path="/" element={<Root/>}>

  </Route>
  <Route path="/payment" element={<PaymentRoot/>}>

</Route>
  
  <Route path='/login' element={<Login/>}></Route>
  <Route path="/checkout" element={<CheckoutRoot/>} /> 
</Routes>
</BrowserRouter>
    </div>


   
  );


  }

export default App;
