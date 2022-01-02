import React,{useState, useEffect} from 'react'
import ApiService from '../../APIService'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom';




function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
  // let history = useHistory()

/*     useEffect(() => {
        if(token['mytoken']) {
            history.push('/articles')
        }
    }, [token])
 */



 /*    function loginUser(body)
        {
            let item = {username, password}
                      console.warn("item",item)
                      fetch(`http://127.0.0.1:8000/login/`, {
            method: 'POST',
            headers:{
              Accept:'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
  
        }).then(resp => resp.json())

    }
 */

        
/* 
        function loginUser(){
         console.log(username)
        }  */


        let headers = new Headers();

  
      
        headers.append('GET', 'POST', 'OPTIONS');
            
          
    function getStudent()

    {

        return fetch(`http://127.0.0.1:8080/api/v1/students/1`,{
            'method':'GET',
            headers:{

                'Content-Type':'Authorization',
                'Accept': 'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJzdHVkZW50OndyaXRlIn0seyJhdXRob3JpdHkiOiJzdHVkZW50OnJlYWQifSx7ImF1dGhvcml0eSI6ImVtcGxveWVlOndyaXRlIn0seyJhdXRob3JpdHkiOiJjb3Vyc2U6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LHsiYXV0aG9yaXR5IjoiZW1wbG95ZWU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiY291cnNlOndyaXRlIn1dLCJpYXQiOjE2NDA5MDk4ODYsImV4cCI6MTY0MTc2OTIwMH0.btkHF9MNq2wAxdvYcbzs9D4Or2hNDhfCfHMJPuOmMXsi4i3_ZRVU98KttYJMJSC1SZ9OM8syqvQ6nV6BxHEg9g'

            },
           // body:JSON.stringify(body)

        }).then (resp => resp.json())
        .then(resp => console.log(resp));


    }

    



        const loginBtn = () => {
            ApiService.loginUser({username, password})
            //.then(resp => console.log(resp))
            .then(resp => setToken('mytoken',resp.token))
            .catch(error => console.log(error))
    
        }   
        const RegisterBtn = () => {
            ApiService.RegisterUser({username, password})
            .then(() =>  loginBtn())
            .catch(error =>console.log(error))
    
        }

/*         const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(username)
        }

       const handleInputEvent=(event)=>{
            console.log(event.target.username)
            console.log(event.target.value)
            this.setUsername(
               { [event.target.username]:event.target.vaue}
            )
        }

 */

    return (
        <div className="App">
            <br></br>
            <br></br>
            {isLogin ? <h1>Please Login </h1> : <h1>Please Register </h1>}
            <br></br>
            <br></br>
            <div className="mb-3"></div>

{/*         {    <form onSubmit={handleSubmit}>
            <input type="text" placehoder="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            <input type="text" placehoder="password" value={password} onChange={(e)=>setUsername(e.target.value)}></input>

            <input type="submit" value="ok"></input>
            <button>send</button>
            </form>
}
        */}


            <label htmlFor="username" className="form-label"></label>

            <input type="text" className="form-control"id="username"placeholder="Enter a username"
            value = {username} onChange={e=>setUsername(e.target.value)}></input>

            <br></br>
            <div className="mb-3"></div>
            <label htmlFor="password" className="form-label"></label>
            <input type="password" className="form-control" id="password" placeholder="Enter a password"
                value={password} onChange={e => setPassword(e.target.value)}
            ></input>
            <br></br>
            {isLogin ? <button onClick={loginBtn} className="btn btn-primary">Login</button>
                : <button onClick={RegisterBtn} className="btn btn-primary">Register</button>
            }

            <div className="mb-3">
                <br />
                {isLogin ? <h5>If You Don't Have Account, Please <button className="btn btn-primary" onClick={() => setLogin(false)} >Register</button>Here</h5>

                    : <h5>If You Have Account, Please <button className="btn btn-primary" onClick={() => setLogin(true)} >Login</button>Here</h5>
                }

                <button onClick={getStudent}>getStudentTest</button>

            </div>

        </div>
    )
}

export default Login
