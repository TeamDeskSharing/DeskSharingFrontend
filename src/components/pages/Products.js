import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import '../css/styles.css'
import '../../index.css'


function Products() {



    const [sales, setSales] = React.useState([]);
    const [myUrl, setMyUrl] = React.useState();





   function getEmployeeIdByName(name) {
        const tokenLS = localStorage.getItem('token');
    
        return fetch(`http://localhost:8080/api/v1/employee/findEmployeeByUsername/${name}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenLS}`}
        })
        .then((response) => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('Server response wasn\'t OK');
          }
        })
    
        .then(res => {
          return 'http://127.0.0.1:8080/api/v1/booking/findBookingsByEmployee/'+ res.id;
        })
       }

       let name = localStorage.getItem('username');

       getEmployeeIdByName(name).then((employeeid)=>{

        return `http://127.0.0.1:8080/api/v1/booking/findBookingsByEmployee/${employeeid}`;
        
           
       })

       const url = getEmployeeIdByName(name);
       console.log(url)

       const printAddress = () => {
        url.then((a) => {     
          setMyUrl(a);
          console.log(myUrl)
        });
      };

      printAddress()

       const tokenLS = localStorage.getItem('token') 
       React.useEffect(() => {
           fetch(myUrl, {
               method: 'GET',
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${tokenLS}`
   
               }
   
           })
               .then(res => res.json())
               .then(sales => setSales(sales))
               .catch(err => console.log(err.message));
       }, []);
   









    function declineBooking(id) {
        return fetch(`http://localhost:8080/api/v1/booking/updateAbgelehnt/${id}`, {
            'method': 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenLS}`
            },
         /*    body: JSON.stringify(body) */

        }).then(resp => console.log(resp.json()))



    }

 


    return (
        <div>

            <h2  style={{color:"white"}} className="text-center">Buchungsanfragen Liste</h2>
            <div className="row">

            </div>

            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th style={{color:"white"}}>ID</th>
                            <th  style={{color:"white"}}>Mitarbeiter</th>
                            <th style={{color:"white"}}>Startzeit</th>
                            <th style={{color:"white"}}>Endzeit</th>
                            <th style={{color:"white"}}>Status</th>
                            <th style={{color:"white"}}>Actions</th>

                        </tr>

                    </thead>

                    <tbody>
                        {sales.map(
                            e =>
                                <tr key={e.id}>
                                    <td style={{color:"white"}}>{e.id}</td>
                                    <td style={{color:"white"}}>{e.employee.firstname}</td>
                                    <td style={{color:"white"}}>{e.timestart}</td>
                                    <td style={{color:"white"}}>{e.timeend}</td>
                                    <td style={{color:"white"}}>{e.status}</td>
                                    <td>
                                    <button style={{ marginLeft: "10px" }} onClick={() => declineBooking(e.id)} className="btn btn-danger">Auschecken </button>

{/* {
 e.status == "akzeptiert" ? (
    <button style={{ marginLeft: "10px" }} onClick={() => declineBooking(e.id)} className="btn btn-danger">Auschecken </button>
)  : {} 
} */}
                                         
                                      
                                        {/* <button style={{ marginLeft: "10px" }} onClick={() => this.viewSales(e.id)} className="btn btn-info">View </button> */}

                                    </td>


                                </tr>
                        )}

                    </tbody>


                </table>



            </div>



        </div>
    )
}
export default Products