import React from 'react'

function ShowBlockedBookings(officeid) {

   

    const [eymplees, setEmployees] = React.useState([]);

    const url = "http://localhost:8080/api/v1/booking/findBookingsByStatus/akzeptiert";

    const token = localStorage.getItem('token')

    React.useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }

        })
            .then(res => res.json())
            .then(eymplees => setEmployees(eymplees))
            .catch(err => console.log(err.message));
    }, []);







    return (
        <div>

            <h2 className="text-center">Geblockte Arbeitsplätze</h2>
            <div className="row">

            </div>

            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th  style={{color:"white"}}>ID</th>
                            <th style={{color:"white"}}>Status</th>
                            <th style={{color:"white"}}>Startzeit</th>
                            <th style={{color:"white"}}>Endzeit</th>
                            <th style={{color:"white"}}>Arbeitsplatz</th>

                        </tr>

                    </thead>

                    <tbody>
                        {console.log(eymplees)}
                        {eymplees.map(
                            e =>
                                <tr key={e.id}>
                                    <td style={{color:"white"}}>{e.id}</td>
                                    <td style={{color:"white"}}>{e.status}</td>
                                    <td style={{color:"white"}}>{e.timestart}</td>
                                    <td style={{color:"white"}}>{e.timeend}</td>
                                    <td style={{color:"white"}}>{e.workplace.id}</td>
                                    <td>

                                    </td>


                                </tr>
                        )}

                    </tbody>


                </table>



            </div>



        </div>
    )
}
export default ShowBlockedBookings