import React, { useState, useEffect } from 'react'
import ApiService from '../../APIService'
import { useCookies } from 'react-cookie'




function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)



 



    const loginBtn = () => {
        ApiService.loginUser({ username, password })
    
            .then(resp => setToken('mytoken', resp.token)) //cookie token verifizierung
            .catch(error => console.log(error))

    }
    const RegisterBtn = () => {
        ApiService.RegisterUser({ username, password })
            .then(() => loginBtn())
            .catch(error => console.log(error))

    }

    /* Register User -- NOT IMPLEMENTED YET */
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

      

            <label htmlFor="username" className="form-label"></label>

            <input type="text" className="form-control" id="username" placeholder="Enter a username"
                value={username} onChange={e => setUsername(e.target.value)}></input>

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

              

            </div>

        </div>
    )
}

export default Login
