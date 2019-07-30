import React from 'react'
import './News.css'
import { Table } from 'reactstrap';


function Header (props){
    return(
        <div>
             <h1>News and Updates</h1>
        
        
        <Table>
           
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>News content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>24-07-2019</td>
            <td>NSS team joined the campaign big mumbai clean organised by Khushiya foundation.</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>27-3-2019</td>
            <td>Inventum team competetion</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>23-2-2019</td>
            <td>"Aagmi" our official dance team of SIESGST has won first position at PILLAI COLLEGE and second place at AMITY UNIVERSITY.</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
}

export default Header;