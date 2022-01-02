import React from 'react';
import Typed from 'react-typed';


/* Der Administrator kann nach erfolgreicher Buchungsanfrage jede
einzelne Buchungsanfrage bestätigen oder ablehnen. In beiden Fällen
wird an die für den Anfrager hinterlegte Mail-Adresse eine Bestätigungsoder Absage-Mail verschickt. */


/* 1. get all bookings 
    2. put/post booking?
    3. send email
    
    */
const Products = () => {


  return (

    
    
    <div
    
 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh'
      }}
    >


    
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Typed 
        className="typed-text"
        strings={[" Der Administrator kann nach erfolgreicher Buchungsanfrage jede einzelne Buchungsanfrage bestätigen oder ablehnen.",
       
      "In beiden Fällen wird an die für den Anfrager hinterlegte Mail-Adresse eine Bestätigungsoder Absage-Mail verschickt ", 
      "Lets go",
      ]}
        typeSpeed={30}
        backSpeed={8}
        ></Typed>

    </div>

  );
};




export default Products;