import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import  MenuList  from '../MenuList/MenuList.jsx'
import MenuCard from '../MenuCard/MenuCard.jsx'
import Hero from '../Hero/Hero.jsx'
export default function LandingPage(){

 return(
 <>
    <Navbar/>
    <Hero/>
    <MenuList/>
    <MenuCard/>
</>

)   
}