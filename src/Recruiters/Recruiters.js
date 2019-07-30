import React from 'react'

function Recruiters (props){
    return(
        <div className="img">
          <br></br>
          <h1>Top Recruiters</h1>
          <ul>
          <li><img height="20%" width="20%" src="ibm.jpg" alt ='ibm'></img>   <img height="20%" width="20%" src="cadbury.jpg" alt='cadbury'></img></li>
          
          <li><img height="20%" width="20%" src="dabur.png" alt ='dabur'></img>   <img height="20%" width="20%" src="lnt.JPG" alt='lnt'></img>  </li>
          
          <li><img height="20%" width="20%" src="oracle.png" alt='oracle'></img> <img height="20%" width="40%" src="tcs.jpg" alt='tcs'></img>  <img height="20%" width="20%" src="techmahindra.jpg" alt='tm'></img>  </li>
          </ul>
        </div>
    )
}

export default Recruiters;