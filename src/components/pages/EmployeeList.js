import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

/* POST BOOKING REQUEST */
/* 
• Das System unterscheidet die Benutzerrollen Admin und User.
• Ein User kann sich im Browser durch Eingabe von Benutzernamen und
Kennwort im System anmelden und einen Arbeitsplatz auswählen. Es wird
ihm über den Browser ein Grundriss über die Gebäude, die vorhandenen
Büros und die buchbaren Arbeitsplätze angezeigt. Durch Anklicken kann
er einen Arbeitsplatz auswählen und seinen Buchungswunsch
hinterlegen. --> POST BOOKING REQUEST, GET WORKSPACE BY STATUS

• Der Administrator kann nach erfolgreicher Buchungsanfrage jede
einzelne Buchungsanfrage bestätigen oder ablehnen. In beiden Fällen
wird an die für den Anfrager hinterlegte Mail-Adresse eine Bestätigungsoder
Absage-Mail verschickt. --> PUT BOOKING REQUEST + POST MAIL 


• Ein User kann sich im System alle vom ihm erstellten Buchungsanfragen
ansehen lassen, ebenfalls kann er sich tabellarisch die bestätigten sowie
die abgelaufenen Buchungen darstellen lassen. -->  GETBOOKING BY STATUS , GET BOOKING BY NAME
• Sollte ein User seinen Arbeitsplatz vor Ablauf seiner Buchungszeit seinen
Arbeitsplatz vorzeitig verlassen, muss er sich im System anmelden und
den Arbeitsplatz als frei markieren, sodass dieser Arbeitsplatz im System
direkt wieder als buchbar erscheint. --> PUT BOOKING REQUEST, PUT WORKING SPACE 
• Für eine telefonische Kontaktaufnahme soll das System die gerade für
einen Mitarbeiter gültige und mögliche Telefonnummer öffentlich ohne
Authentifizierung abrufbar sein. Befindet sich ein Mitarbeiter im
HomeOffice, so wird bei einer Suche die Telefonnummer des im System
bei den Stammdaten des Mitarbeiters hinterlegte Rufnummer angezeigt.
Arbeitet der gleiche Mitarbeiter jedoch an einem von ihm gebuchten
Arbeitsplatz im U‘g, so wird bei der Suche die Telefonnummer des
jeweiligen Arbeitsplatzes angezeigt. 
FIND EMPLOYEE 
*/


function EmployeeList() {

    const history = useHistory();

    const [sales, setSales] = React.useState([]);

    const url = "http://127.0.0.1:8080/api/v1/employee/getAllEmployees";

    const employeeToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbXBsb3llZSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0VNUExPWUVFIn1dLCJpYXQiOjE2NDA5NjE5OTgsImV4cCI6MTY0MTc2OTIwMH0.91aHobFVPMEQ5EWj68q_pYk9qE52QrIIvJmdiWfs1nAyL7HFhDJ98Ssa46VHu7R-YGmXGnht-HhGzvx16phjMQ"
    const adminToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJzdHVkZW50OndyaXRlIn0seyJhdXRob3JpdHkiOiJzdHVkZW50OnJlYWQifSx7ImF1dGhvcml0eSI6ImVtcGxveWVlOndyaXRlIn0seyJhdXRob3JpdHkiOiJjb3Vyc2U6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LHsiYXV0aG9yaXR5IjoiZW1wbG95ZWU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiY291cnNlOndyaXRlIn1dLCJpYXQiOjE2NDExMzc4OTQsImV4cCI6MTY0MTk0MjAwMH0.PHgf7SbLHrtiiwHBT6w70SjLs4Lj_4rVvotbFNhcpXOfwwI6g6WLIM7qKQCaHPDb6P0QN1z9FlQRvJhfDTcGNQ"

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
            .then(sales => setSales(sales))
            .catch(err => console.log(err.message));
    }, []);



    function addSales() {
        history.push("/create");

    }

    function editSales(id) {
        history.push(`/update/${id}`)
        window.location.reload(false);


    }

    /*     function deleteSales(id) {
            SalesService.deleteSales(id);
            window.location.reload(false);
        } */


    return (
        <div>

            <h2 className="text-center">Mitarbeiter Liste</h2>
            <div className="row">
                <button className="btn btn-primary" type="button" onClick={addSales}>Add Sales</button>

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
                                    <td>{e.firstname}</td>
                                    <td>{e.lastname}</td>
                                    <td>{e.phonenumber}</td>
                                    <td>{e.email}</td>
                                    <td>
                                        <button onClick={() => editSales(e.id)} className="btn btn-info">Update </button>

                                        <button style={{ marginLeft: "10px" }} className="btn btn-danger">Delete </button>


                                    </td>


                                </tr>
                        )}

                    </tbody>


                </table>



            </div>



        </div>
    )
}
export default EmployeeList