import React from 'react'

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

   

    const [eymplees, setEmployees] = React.useState([]);

    const url = "http://127.0.0.1:8080/api/v1/employee/getAllEmployees";

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

            <h2 className="text-center">Mitarbeiter Liste</h2>
            <div className="row">

            </div>

            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th  style={{color:"white"}}>ID</th>
                            <th style={{color:"white"}}>Vorname</th>
                            <th style={{color:"white"}}>Nachname</th>
                            <th style={{color:"white"}}>Telefonnummer</th>
                            <th style={{color:"white"}}>Email</th>

                        </tr>

                    </thead>

                    <tbody>
                        {eymplees.map(
                            e =>
                                <tr key={e.id}>
                                    <td style={{color:"white"}}>{e.id}</td>
                                    <td style={{color:"white"}}>{e.firstname}</td>
                                    <td style={{color:"white"}}>{e.lastname}</td>
                                    <td style={{color:"white"}}>{e.phonenumber}</td>
                                    <td style={{color:"white"}}>{e.email}</td>
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
export default EmployeeList