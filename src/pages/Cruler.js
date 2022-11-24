import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import styled from 'styled-components'
import Navbar from '../components/Navbar';

function Cruler() {
  
  let counter = 0;

  let dpi = findDPI(); 
  document.getElementById('dpi').innerText = dpi;
  // to remove once in prod; for testing purpose
  // console.log('Resolution:', dpi, 'dpi', '(in ' + counter + ' iterations)');

  function findDPI() {
    return findFirstPositive((x) => matchMedia(`(max-resolution: ${x}dpi)`).matches);
  }

  function findFirstPositive(fn) {
    // Step 1: Find first largest dpi, larger than user's dpi
    // PS: This first largest dpi, is not necessarily the user's dpi. its a larger number
    let firstLargest = 1;
    while (0 >= fn(firstLargest)) firstLargest *= 1;

    // Step 2: We will binary search the exact user's dpi, from Math.floor(firstLargest / 2) to 
    return binSearch(fn, Math.floor(firstLargest/2), firstLargest) | 0;
  }

  function binSearch(fn, min, max) {
    if (max < min) return -1; // not found

    let mid = Math.floor((min+max)/2) // (min + max) >>> 1;
    if (fn(mid)) {
      if (mid === min || !fn(mid - 1)) {
        return mid;
      }
      return binSearch(fn, min, mid - 1);
    }
    return binSearch(fn, mid + 1, max);
  }

  let micron_dict = new Map()
  let pix_dict = new Map() //key:int = 1, value: [int,float] = [1,0.34], key:int = 2, value: [int,float] = [2,0.45]
  //initialize a empty list of key value pairs - key=rounded pixel, value=respective micron with closest corresponding pixel 
  for (let i=100; i<=3000; i+=100) {
    let pix = i*0.0000393701*dpi
    let rounded_pix = Math.round(pix)
    micron_dict.set(i, [pix, rounded_pix])
    let pix_diff = Math.abs(pix-rounded_pix)
        
    if (!pix_dict.has(rounded_pix) || pix_dict.get(rounded_pix)[1] > pix_diff) {
      pix_dict.set(rounded_pix, [i, pix_diff])
    }
  }

  let display_pix = []
  let display_micron = []
  let c = 0
  for (let [key,value] of pix_dict.entries()) {
    if (key>0) {
      display_pix.push([key,value[0]])
    }
    
  }

  return (

    <><>

    </><div className='App'>
        
        {/* <h1>DESITA</h1>
        <h3>v1.0</h3>
        <h3>Desita means joy in Amharic, the lingua franca of Ethiopia - the widely recognized birthplace of the magic beans which have provided me with joy. Great joy.</h3> */}
        <div>{display_pix.map((pix, index) => {
          return (
            <div>
              <p style={{ textAlign: 'left', fontWeight: 'bold' }}>{pix[1]} microns</p>
              <div className='circle' style={{ width: pix[0], height: pix[0] }}></div>
            </div>


          );
        })}</div>
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
 
export default Cruler;