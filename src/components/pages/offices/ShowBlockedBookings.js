import React from 'react'

function ShowBlockedBookings(props) {

   

    const [blockedBookings, setBlockedBookings] = React.useState([]);


    function getProps()
    {
        let id = props.value;
        return id;
    }



    const urlWP=`http://localhost:8080/api/v1/booking/getBlockedBookingsByOffice/${getProps()}`;
    const token = localStorage.getItem('token')

    React.useEffect(() => {
        fetch(urlWP, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }

        })
            .then(res => res.json())
            .then(blockedBookings => setBlockedBookings(blockedBookings))
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
        
                            <th >Startzeit</th>
                            <th >Endzeit</th>
                            <th >Arbeitsplatz</th>

                        </tr>

                    </thead>

                    <tbody>
                     
                        {blockedBookings.map(
                            e =>
                                <tr key={e.id}>
                       
                                    <td >{e.timestart}</td>
                                    <td >{e.timeend}</td>
                                    <td >{e.workplace.id}</td>
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