import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';




function AdminBooking() {

    const history = useHistory();

    const [sales, setSales] = React.useState([]);

    const url = "http://127.0.0.1:8080/api/v1/booking/getAllBookings";

    const employeeToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbXBsb3llZSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0VNUExPWUVFIn1dLCJpYXQiOjE2NDA5NjE5OTgsImV4cCI6MTY0MTc2OTIwMH0.91aHobFVPMEQ5EWj68q_pYk9qE52QrIIvJmdiWfs1nAyL7HFhDJ98Ssa46VHu7R-YGmXGnht-HhGzvx16phjMQ"

    const adminToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJzdHVkZW50OndyaXRlIn0seyJhdXRob3JpdHkiOiJzdHVkZW50OnJlYWQifSx7ImF1dGhvcml0eSI6ImVtcGxveWVlOndyaXRlIn0seyJhdXRob3JpdHkiOiJjb3Vyc2U6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJLHsiYXV0aG9yaXR5IjoiZW1wbG95ZWU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiY291cnNlOndyaXRlIn1dLCJpYXQiOjE2NDExMzc4OTQsImV4cCI6MTY0MTk0MjAwMH0.PHgf7SbLHrtiiwHBT6w70SjLs4Lj_4rVvotbFNhcpXOfwwI6g6WLIM7qKQCaHPDb6P0QN1z9FlQRvJhfDTcGNQ"

    const tokenLS = localStorage.getItem('token')

    React.useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${tokenLS}`

            }

        })
            .then(res => res.json())
            .then(sales => setSales(sales))
            .catch(err => console.log(err.message));
    }, []);



/*     function addSales() {
        history.push("/create");
    } */


    function updateBooking(body,token){

        return fetch(`http://127.0.0.1:8080/api/v1/booking/update`,{
            'method':'PUT',
            headers:{

                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${tokenLS}`
            },
            body:JSON.stringify(body)

        }).then (resp => resp.json())
    }

   function postEmail(id, body,token){

        return fetch(`http://127.0.0.1:8080/api/v1/mail/`,{
            'method':'Post',
            headers:{

                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${employeeToken}`
            },
            body:JSON.stringify(body)

        }).then (resp => resp.json())
    }

    function acceptBooking(id) {
       /*  history.push(`/update/${id}`)
        window.location.reload(false); */
        //${id}
        let body = sales[id-1];
        body.id = 1
        body.employeename = 'test'
        body.status = 'test'
        
        return fetch(`http://localhost:8080/api/v1/booking/update`,{
            'method':'PUT',
            headers:{

                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${tokenLS}`
            },
            body:JSON.stringify(body)

        }).then (resp => console.log(resp.json()))

    }

    function declineBooking(id) {
        history.push(`/update/${id}`)
        window.location.reload(false);


    }

/*     function deleteSales(id) {
        SalesService.deleteSales(id);
        window.location.reload(false);
    } */


    return (
        <div>

            <h2 className="text-center">Buchungsanfragen Liste</h2>
            <div className="row">
                <button className="btn btn-primary" type="button" >Add Sales</button>

            </div>

            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Vorname</th>
                            <th>Nachname</th>
                            <th>Telefonnummer</th>
                            <th>Email</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>
                        {sales.map(
                            e =>
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.employeename}</td>
                                    <td>{e.timestart}</td>
                                    <td>{e.timeend}</td>
                                    <td>{e.status}</td>
                                    <td>
                                        <button onClick={() => acceptBooking(e.id)} className="btn btn-info">Update </button>

                                        <button style={{ marginLeft: "10px" }} /* onClick={() => deleteSales(e.id)} */ className="btn btn-danger">Delete </button>
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