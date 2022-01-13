
import Typed from 'react-typed';


import React, { Component } from 'react';
import ApiService from '../../APIService';
import ReactCountryFlag from 'react-country-flag';




class Products extends Component {

  getEmployeeIdByName(name) {
    const tokenLS = localStorage.getItem('token');

    return fetch(`http://localhost:8080/api/v1/employee/findEmployeeByUsername/${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenLS}`}
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error('Server response wasn\'t OK');
      }
    })

    .then(res => {
      //return res.id;
      return 'http://127.0.0.1:8080/api/v1/booking/findBookingsByEmployee/'+ res.id;
    })
   }
   

  constructor(props) {
    super(props)



    this.state = {
      bookings:[

      ],

      urlstate:'test'
    


    }

    
    

  }



  async componentDidMount() {
    
  
  
 /*  let name = localStorage.getItem('username');





 this.getEmployeeIdByName(name).then((employeeid)=>{
  
  return `http://127.0.0.1:8080/api/v1/booking/findBookingsByEmployee/${employeeid}`;
  //const url_booking = "https://jsonplaceholder.typicode.com/users"
  
     
 })

 const url = this.getEmployeeIdByName(name); */

/*  console.log("erste url als promise")
 console.log( url.then(value =>{return value})) */
// console.log(typeof url)


/* const printAddress = () => {
  url.then((a) => {
    console.log("staring print adress..")
    const myurl = a;
    this.setState({
      urlstate: a
});
    console.log(this.state.urlstate)
  });
};
console.log(this.state.urlstate) */
/* 
const myUrl = printAddress();

console.log(myUrl)
console.log(typeof myUrl)
 */

/* const printAddress = async ()=> {
  url.then((a) => {
    console.log("staring print adress..")
    const myurl = a;
    this.setState({
      urlstate: a
});
    console.log(this.state.urlstate)
  });
};

printAddress(); */


/* const printAddress = async ()=> {
  url.then((a) => {
    console.log("staring print adress..")
    this.setState({
      urlstate: a
});
    console.log(this.state.urlstate)
  });
};

printAddress();

 */


let name = localStorage.getItem('username');
this.getEmployeeIdByName(name).then((employeeid)=>{

  return `http://127.0.0.1:8080/api/v1/booking/findBookingsByEmployee/${employeeid}`;
  //const url_booking = "https://jsonplaceholder.typicode.com/users"
  
     
 })

 const url = this.getEmployeeIdByName(name);

 const printAddress = async ()=> {
  url.then((a) => {
    console.log("staring print adress..")
    this.setState({
      urlstate: a
});
    console.log(this.state.urlstate)
  });
};


console.log("urlstate beforecall:")
    console.log(this.state.urlstate)
  // const url_booking = `http://127.0.0.1:8080/api/v1/booking/findBookingsByEmployee/1`;
   const tokenLS = localStorage.getItem('token');


   printAddress();
   const urlcall = this.state.urlstate;

    //const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(urlcall,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenLS}`
      
        },
      }
        
        );
    const data = await response.json();
   this.setState({ bookings: data, loading: false });

   console.log("urlstateaftercall:")
   console.log(this.state.urlstate)

  }


/* 
   componentDidMount() {




   const tokenLS = localStorage.getItem('token');

   let name = localStorage.getItem('username');

   
   const url_booking = null;

this.getEmployeeIdByName(name).then((employeeid)=>{
  
   url_booking = `http://127.0.0.1:8080/api/v1/booking/findBookingsByEmployee/${employeeid}`;
 //const url_booking = "https://jsonplaceholder.typicode.com/users"
  


    
})


const response=  fetch(url_booking, 
  {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${tokenLS}`

  },

}

)



    .then(res => res.json())
  .then(res => console.log( res ))

    .then(res => this.setState({ bookings:res }))



  .catch(err => console.log(err.message));
    








  } */


  render() {



    return (
      <div>

        
{this.state.bookings.map(item=>(
          <li keys={item.id}>{item.id} </li>
        ))}




{/*  
<h2  style={{color:"white"}} className="text-center">Buchungsanfragen Liste</h2>
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
                        {bookings.map(
                            booking =>
                                <tr key={booking.id}>
                                    <td style={{color:"white"}}>{booking.id}</td>
                                    <td style={{color:"white"}}>{booking.name}</td>
                                    <td style={{color:"white"}}>{booking.timestart}</td>
                                    <td style={{color:"white"}}>{booking.timeend}</td>
                                    <td style={{color:"white"}}>{booking.status}</td>
                                    <td>
                                    </td>


                                </tr>
                        )}








                    </tbody>


                </table>



            </div> */}


      </div>
    );
  }
}

export default Products;




/* state = {
  loading: true,
  person: []
};

async componentDidMount() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();
 this.setState({ person: data, loading: false });
}

render() {
  var { person } = this.state;  
  if (this.state.loading) {
    return <div>loading...</div>;
  }

  if (!this.state.person) {
    return <div>didn't get a person</div>;
  }

  return (
    <div>


{this.state.person.map(item=>(
          <li keys={item.id}>{item.name} </li>
        ))}

    </div>
  );
}
} */

