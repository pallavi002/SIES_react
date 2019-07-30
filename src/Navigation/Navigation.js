import React from 'react';
import './Navigation.css'

function Navigation (props){
    return(
           <div>
               <div class="navbar">
  <a href="#home">Home</a>
  <a href="#news">About US</a>
  <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
</div>
           </div>
            
)};

export default Navigation;