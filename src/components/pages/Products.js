import React from 'react';
import Typed from 'react-typed';


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
        strings={["Products Products Products",
       
      "Products Products Products Products Products Products Products Products Products Products Products Products ", 
      "Products Products ProductsProducts Products ProductsProducts Products Products Products Products ProductsProducts Products Products",
      ]}
        typeSpeed={30}
        backSpeed={8}
        ></Typed>

    </div>

  );
};




export default Products;