import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
const Header = () => {

const handleAuthendication = () => {
  if(user){
       auth.signOut();
  }
}

  const [{basket , user}] = useStateValue();
  return (
    <div className='header'> 
       <Link to="/">
    <img className='header__logo'
    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
  alt='fhf'  />
       </Link>
    <div className='header__search'>
        <input
        className='header__searchInput' type='text'/>
     
        <img className="header__searchIcon" src="amazon-clone\amzoneclone\public\search-interface-symbol.png" alt='f'/>
     
       
        </div>

        <div className='header__nav'>
    <Link to={!user && '/login'}>
    
  
         <div onClick={handleAuthendication} className='header__optional'>
          <span
          className='header__optionalLineOne'>
            Hello{!user ? 'Guest' :
            user.email}</span>
          <span 
          className='header__optionalLineTwo'>{user ? 'Sign Out' : 'Sign In'}
          </span>
         </div>
         </Link>
         <div className='header__optional'>
         <span
          className='header__optionalLineOne'>Returns</span>
          <span 
          className='header__optionalLineTwo'>& Orders</span>
         </div>
         <div className='header__optional'>
         <span
          className='header__optionalLineOne'>Your</span>
          <span 
          className='header__optionalLineTwo'>Prime</span>
         </div>
         {/* <div className='header__optional'>

         </div> */}
<Link to="/checkout">
         <div className='header__optionBasket'>
         <img  src="amazon-clone\amzoneclone\public\search-interface-symbol.png" alt='fhgf'/>
         <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
         </div>
         </Link>
        </div>
    </div>
    
  )
}

export default Header