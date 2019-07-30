import React from 'react'
import { Table } from 'reactstrap';


function Announcements (props){
    return(
        <div>
             <h1>Announcements</h1>
        
        
        <Table>
           
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Admission</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>19-7-2019</td>
            <td>Merit list after counselling round 1.</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>15-7-2019</td>
            <td>First year Engineering Admissions-Institute Level Counselling Round I -Schedule 2019-20</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>27-4-2019</td>
            <td>Department of Humanities and Applied Science is organising AICTE-ISTE approved two weeks sttp on Transforming higher education Milieu-towards excellence from April 27 to May 10,2019</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>15-4-2019</td>
            <td>MHRD Innovation Cell (MIC) is organizing "India First Leadership Talk Series" with Prof. Anil D. Sahasrabudhe, Chairman, All India Council for Technical Education. Date: 22nd April 2019 Time: 12:00 PM to 12:45 PM</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>5-4-2019</td>
            <td>BE SEM VII and VIII (CBSGS) FH 2019 EXAM FORM SUBMISSION NOTICE</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>12-3-2019</td>
            <td>MIC- IIC Leadership Talk- Shri AjitDoval Ji, National Security Advisor, GoI- 19 March 2019 at 11:30 AM</td>
          </tr>
        </tbody>
      </Table>
      
      <h1>Events</h1>
      <p>There are no upcoming events...</p>
      </div>
    )
}

export default Announcements;