import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className="home">
        <div className='home__container'>
      <img className='home__image' src="
    https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"/>
 <div className='home__row'>

  <Product
  id="323232"
  title="The lean startup pahe"
  price={29.99}
  image="https://m.media-amazon.com/images/I/71eBTOXE3YL._AC_UL600_FMwebp_QL65_.jpg"
  rateing={5}
  />
  <Product
   id="45454521212"
   title="The lean startup hfgsksdudnd"
   price={292.99}
   image="https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL480_QL65_.jpg"
   rateing={5}
  />

 </div>

 <div className='home__row'>
 <Product
   id="45434545"
   title="The lean startup hfgsksdudnd"
   price={222192.99}
   image="https://m.media-amazon.com/images/I/61evn1vGJxL._AC_UL480_QL65_.jpg"
   rateing={4}
  />
 <Product
   id="4545435454545"
   title="The lean startup hfgsksdudnd Demo "
   price={2920099.99}
   image="https://m.media-amazon.com/images/I/81AE-JfoadL._UX695_.jpg"
   rateing={7}
  />
 <Product
   id="454545"
   title="The lean startup hfgsksdudn demo2112 d"
   price={21000.99}
   image="https://m.media-amazon.com/images/I/71d5fMDvq9L._AC_UY327_FMwebp_QL65_.jpg"
   rateing={5}
  />
 </div>


 <div className='home__row'>
 <Product
   id="454545"
   title="The lean startup hfgsksdudnd"
   price={292.99}
   image="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/6a3a9346-0583-4795-8a17-f357e07770bf._SX507_QL70_.png"
   rateing={5}
  />
 
  


 </div>



        </div>
      
    </div>
  )
}

export default Home;