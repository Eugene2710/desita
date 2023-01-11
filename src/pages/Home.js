import React from 'react';
import logo from '../logo.svg';
import '../App.css';
// import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Cruler from './Cruler';

function Home() {
  
  


  return (

    <><>
    </><div className='App'>
        
        <h1>DESITA</h1>
        <h3>v1.0</h3>
        <h3>Hoping to brew something cool here</h3>
        <h4>For now, check out the Cruler!</h4>
        {/* <Cruler/> */}
      </div></>
    /*
      1) convert dpi to pixels
        a. get pixels per inch of screen
        b. 
      2) increase pixels per micron
      3) increase circles to 3 per row, 2 rows for each microns and indicate micron
    */
  );
}

export default Home;

/*
  Methods tried to ensure dimensions remain the same across different devices
1) Using absolute units,e.g cm
2) Using px, pt -  this also allow dimensions to remain the same across different 
dimensions bc of each screen has a different ppi/dpi 
3) using text-size-adjust: none
4) using vw
5) kind of tried <meta name="viewport" content="width=device-width, initial-scale=1">
  might want to revisit later on

whats next
a. try media querying
b. try Windows.innerwidth and Windows.outerwidth
*/
