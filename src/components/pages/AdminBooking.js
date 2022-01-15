import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import ApiService from '../../APIService';


function AdminBooking() {


    const [bookingRequest, setBookingRequest] = React.useState([]);




    React.useEffect(() => {

            ApiService.getAllRequest().then(bookingRequest => setBookingRequest(bookingRequest));
    }, []);


   function declineBooking(id){
        ApiService.declineBooking(id);
        
    }

    function acceptBooking(id){
        ApiService.acceptBooking(id);
    }

  




    return (
        <div>

            <h2 style={{color:"white"}} className="text-center">Buchungsanfragen Liste</h2>
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
                        {bookingRequest.map(
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