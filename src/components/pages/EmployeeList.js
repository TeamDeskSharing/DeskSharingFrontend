import React from 'react'
import ApiService from '../../APIService';




function EmployeeList() {

   

    const [employees, setEmployees] = React.useState([]);

    const [name, setName] = React.useState(" ");

    React.useEffect(() => {

            ApiService.getAllEmployees() .then(employees => setEmployees(employees));
    }, []);




    const getEmployeeByUsername = event => {
        setName(event.target.value);  };
    
      const printUsername = () => {


        ApiService.getEmployeeByUsername(name)
            .then(res => res.json())
            .then(res => setName(res))
            .catch(err => console.log(err.message));

    };


    return (
        <div>


      <input onChange={getEmployeeByUsername} placeholder="Enter name"/>      <button onClick={printUsername}>Mitarbeiter suchen</button>
      <h1 style={{color:"white"}}>Mitarbeiter mit Username: {name.username} hat Telefonnummer: {name.phonenumber}</h1>

            <h2 style={{color:"white"}} className="text-center">Mitarbeiter Liste</h2>
            <div className="row">

            </div>

            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th  style={{color:"white"}}>ID</th>
                            <th style={{color:"white"}}>Username</th>

                            <th style={{color:"white"}}>Vorname</th>
                            <th style={{color:"white"}}>Nachname</th>
                            <th style={{color:"white"}}>Telefonnummer</th>
                            <th style={{color:"white"}}>Email</th>

                        </tr>

                    </thead>

                    <tbody>
                        {employees.map(
                            e =>
                                <tr key={e.id}>
                                    <td style={{color:"white"}}>{e.id}</td>
                                    <td style={{color:"white"}}>{e.username}</td>

                                    <td style={{color:"white"}}>{e.firstname}</td>
                                    <td style={{color:"white"}}>{e.lastname}</td>
                                    <td style={{color:"white"}}>{e.currentphonenumber}</td>
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