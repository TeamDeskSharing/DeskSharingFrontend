import React from 'react';
/* import Typed from 'react-typed';
 */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cards from '../cards/Cards'
import Bowser from './offices/Bowser';
import Mario from './offices/Mario';
import DonkeyKong from './offices/DonkeyKong';


/*  Ein User kann sich im Browser durch Eingabe von Benutzernamen und
Kennwort im System anmelden und einen Arbeitsplatz auswählen. Es wird
ihm über den Browser ein Grundriss über die Gebäude, die vorhandenen
Büros und die buchbaren Arbeitsplätze angezeigt. Durch Anklicken kann
er einen Arbeitsplatz auswählen und seinen Buchungswunsch
hinterlegen.

1.post booking request 

*/




/* Ein User kann sich im System alle vom ihm erstellten Buchungsanfragen
ansehen lassen, ebenfalls kann er sich tabellarisch die bestätigten sowie
die abgelaufenen Buchungen darstellen lassen.
*/

/* 1.  find booking by (current) username + 2. find booking by status*/


/* Sollte ein User seinen Arbeitsplatz vor Ablauf seiner Buchungszeit seinen
Arbeitsplatz vorzeitig verlassen, muss er sich im System anmelden und
den Arbeitsplatz als frei markieren, sodass dieser Arbeitsplatz im System
direkt wieder als buchbar erscheint. */

/* 1. put booking status  / false  */

const Services = () => {

  return (

    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        backgroundColor: "#101522",

      }}
    >

      <Router>


        <div className="cardsDiv">
          <Cards />
        </div>

        <div className="floorplan">
          <Switch>
            <Route exact path='/officedonkeykong' exact component={DonkeyKong} />
            <Route exact path='/officebowser' exact component={Bowser} />
            <Route exact path='/officemario' exact component={Mario} />
          </Switch>
        </div>

      </Router>
    </div>

  );
};




export default Services;