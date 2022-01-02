import React, { Component } from 'react';

class FindEmployee extends Component {



    componentDidMount(){



        function getEmployeeById(id)

        {
    
            return fetch(`http://127.0.0.1:8000/api/v1/employees/${id}/`,{
                'method':'GET',
                headers:{
    
                    'Content-Type':'Authorization',
                    'Accept': 'application/json',
                    'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbm5hc21pdGgiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9TVFVERU5UIn1dLCJpYXQiOjE2NDA2MTkxNjgsImV4cCI6MTY0MTQyMzYwMH0.HUxAI7TfHzsLT058lQi-icEhN07IPhJac86sQ5QK6y_0xqeCuh2R_1fho9Un7_DASABZ3jX2uwAgVgr-kVaxkQ'
    
                },
               // body:JSON.stringify(body)
    
            }).then (resp => resp.json())
            .then(resp => console.log(resp));
    
    
        }
    
    
        function getAllEmployees(id)
    
        {
    
            return fetch(`http://127.0.0.1:8000/api/v1/employees/getAllEmployees/`,{
                'method':'GET',
                headers:{
    
                    'Content-Type':'Authorization',
                    'Accept': 'application/json',
                    'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbm5hc21pdGgiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9TVFVERU5UIn1dLCJpYXQiOjE2NDA2MTkxNjgsImV4cCI6MTY0MTQyMzYwMH0.HUxAI7TfHzsLT058lQi-icEhN07IPhJac86sQ5QK6y_0xqeCuh2R_1fho9Un7_DASABZ3jX2uwAgVgr-kVaxkQ'
    
                },
               // body:JSON.stringify(body)
    
            }).then (resp => resp.json())
            .then(resp => console.log(resp));
    
    
        }

    
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default FindEmployee;