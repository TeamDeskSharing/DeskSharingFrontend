import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import '../css/styles.css'
import '../../index.css'
import tr from '../../globalStyles'
import th from '../../globalStyles'

function AdminBooking() {


    const [sales, setSales] = React.useState([]);


    const url = "http://127.0.0.1:8080/api/v1/booking/getAllBookings";
    const tokenLS = localStorage.getItem('token')

    React.useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenLS}`

            }

        })
            .then(res => res.json())
            .then(sales => setSales(sales))
            .then(res => console.log(res))
            .catch(err => console.log(err.message));
    }, []);



    /*     function addSales() {
            history.push("/create");
        } */


/*     function updateBooking(body, token) {

        return fetch(`http://127.0.0.1:8080/api/v1/booking/update`, {
            'method': 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenLS}`
            },
            body: JSON.stringify(body)

        }).then(resp => resp.json())
    }

    function postEmail(id, body, token) {

        return fetch(`http://127.0.0.1:8080/api/v1/mail/`, {
            'method': 'Post',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${employeeToken}`
            },
            body: JSON.stringify(body)

        }).then(resp => resp.json())
    } */

/*     function acceptBooking(id) {
  
        let body = sales[id - 1];
        body.id = 1
        body.employeename = 'test'
        body.status = 'test'

        return fetch(`http://localhost:8080/api/v1/booking/update`, {
            'method': 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenLS}`
            },
            body: JSON.stringify(body)

        }).then(resp => console.log(resp.json()))

    }
 */

    function acceptBooking(id){
        /*  */

        return fetch(`http://localhost:8080/api/v1/booking/updateAkzeptiert/${id}`, {
            'method': 'PUT',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenLS}`
            },
         /*    body: JSON.stringify(body) */

        }).then(resp => console.log(resp.json()))

         
    }
    


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

    /*     function deleteSales(id) {
            SalesService.deleteSales(id);
            window.location.reload(false);
        } */


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
                                        <button onClick={() => acceptBooking(e.id)} className="btn btn-info">Akzeptieren </button>

                                        <button style={{ marginLeft: "10px" }} onClick={() => declineBooking(e.id)} className="btn btn-danger">Ablehnen </button>
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
export default AdminBooking