import React from 'react'
import ApiService from '../../APIService';

function MyBookings() {



    const [myBookings, setMyBookings] = React.useState([]);


    React.useEffect(() => {

        ApiService.getBookingsByUsername()
            .then(res => res.json())
            .then(myBookings => setMyBookings(myBookings))
            .catch(err => console.log(err.message));
    }, []);


    function declineBooking(id) {

        ApiService.declineBooking(id).then(resp => console.log(resp.json()))



    }


    return (
        <div>

            <h2 style={{ color: "white" }} className="text-center">Buchungsanfragen Liste</h2>
            <div className="row">

            </div>

            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th style={{ color: "white" }}>ID</th>
                            <th style={{ color: "white" }}>Mitarbeiter</th>
                            <th style={{ color: "white" }}>Startzeit</th>
                            <th style={{ color: "white" }}>Endzeit</th>
                            <th style={{ color: "white" }}>Status</th>
                            <th style={{ color: "white" }}>Actions</th>

                        </tr>

                    </thead>

                    <tbody>
                        {myBookings.map(
                            e =>
                                <tr key={e.id}>
                                    <td style={{ color: "white" }}>{e.id}</td>
                                    <td style={{ color: "white" }}>{e.employee.firstname}</td>
                                    <td style={{ color: "white" }}>{e.timestart}</td>
                                    <td style={{ color: "white" }}>{e.timeend}</td>
                                    <td style={{ color: "white" }}>{e.status}</td>

                                    <td>



                                        {e.status == "akzeptiert" ? <button style={{ marginLeft: "10px" }} onClick={() => declineBooking(e.id)} className="btn btn-danger">Auschecken </button> :
                                            <p></p>}

                                    </td>


                                </tr>
                        )}

                    </tbody>


                </table>



            </div>



        </div>
    )
}
export default MyBookings