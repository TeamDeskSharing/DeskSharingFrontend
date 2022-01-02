import React, { Component } from 'react';

/* Für eine telefonische Kontaktaufnahme soll das System die gerade für
einen Mitarbeiter gültige und mögliche Telefonnummer öffentlich ohne
Authentifizierung abrufbar sein. Befindet sich ein Mitarbeiter im
HomeOffice, so wird bei einer Suche die Telefonnummer des im System
bei den Stammdaten des Mitarbeiters hinterlegte Rufnummer angezeigt.
Arbeitet der gleiche Mitarbeiter jedoch an einem von ihm gebuchten
Arbeitsplatz im U‘g, so wird bei der Suche die Telefonnummer des
jeweiligen Arbeitsplatzes angezeigt */

/*1. get current booking status
  2. if home office --> getEmployeePhoneNumber || if desksharing --> getPhone 

*/

class EmployeeFinder extends Component {
    render() {
        return (
            <div>
                <h1>Hi EmployeeFinder</h1>
            </div>
        );
    }
}

export default EmployeeFinder;