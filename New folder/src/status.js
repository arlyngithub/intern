import axios from 'axios';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './About.css';


function App(){
    const [books, setBooks] = useState(null);

      //const apiURL = "http://localhost:5000/api";

    const fetchData = async () => {
       // const response = await axios.get("http://localhost:5000/status",{  email: localStorage.getItem("email") })
                const response = await axios.post("http://localhost:5000/status",{ useremail: localStorage.getItem("email")})

        setBooks(response.data) 
    }

          fetchData();
         // fetchData(localStorage.getItem("email"));

  //<Button variant="primary" onClick={fetchData }>view</Button>


          return (
    <div className="App">

      <h1>Your Requests</h1>
      
          <table class="table table-hover table-dark" variant="dark">
       <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Seminar Hall</th>

      <th scope="col"> Purpose of Event </th>
         <th scope="col"> Number of persons </th>

      <th scope="col">status</th>
  
    </tr>
  </thead>

        <tbody>
        {books &&
          books.map((book, index) => {
            
            return (
         
                     <tr class="hov">
                      <th scope="row">{book.id}</th>
                      <td>{book.seminarhall}</td>
                      <td>{book.purposeofevent}</td>
                      <td>{book.numberofpersons}</td>
                        <td>{book.status}</td>
                    </tr>
              
          
            );
          })}
         </tbody>
      </table>
    </div>
  );
}

export default App;