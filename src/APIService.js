
import axios from 'axios'
export default class ApiService{



     //token = localStorage.getItem('token')


/*     static updateArticle(id, body,token){

        return fetch(`http://127.0.0.1:8000/article/${id}/`,{
            'method':'PUT',
            headers:{

                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)

        }).then (resp => resp.json())
    }


    static insertArticle(body,token){

        return fetch(`http://127.0.0.1:8000/article/`,{
            'method':'POST',
            headers:{

                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)

        }).then (resp => resp.json())
    }

    static deleteArticle(id,token){
        return fetch(`http://127.0.0.1:8000/article/${id}/`,{
            'method':'DELETE',
            headers:{

                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization':`Token ${token}`
            }
          

        })
    } */


/*     static loginUser(body) {

        return fetch('http://127.0.0.1:8080/login', {
          'method':'POST',
          headers: {
                //  'Accept': 'application/json',
              'Content-Type':'application/json',
              
            }, 
            body:JSON.stringify(body)
            
  
       // }).then(resp => resp.json())
                }).then(console.log(body))
  
      } */

      static sendBookingRequest(body){

        
        return fetch(`http://127.0.0.1:8080/api/v1/booking/saveBooking/5`, {
          'method':'POST',
          headers: {
              'Content-Type':'application/json',
              'Authorization':`Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJzdHVkZW50OndyaXRlIn0seyJhdXRob3JpdHkiOiJzdHVkZW50OnJlYWQifSx7ImF1dGhvcml0eSI6ImVtcGxveWVlOndyaXRlIn0seyJhdXRob3JpdHkiOiJjb3Vyc2U6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LHsiYXV0aG9yaXR5IjoiZW1wbG95ZWU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiY291cnNlOndyaXRlIn1dLCJpYXQiOjE2NDExNjg0OTYsImV4cCI6MTY0MjAyODQwMH0.C8eZy964cfAIx-1KB3knss2uQ1mVLTr9Im7ewV7A1LM6Ro5_C8zmu1HoGoVpv5s_5RvEvn2WjwL2oiKQ5U2oHQ`

              
            }, 
            body:JSON.stringify(body)
  
        }).then(resp => resp.json())
  

      }



      static loginUser(body){
          return axios.post('http://127.0.0.1:8080/login', body)
          .then(resp => {
             // console.log(resp)
             localStorage.setItem("token",resp.data)
 /*              resp.json().then((result)=>{
                  console.warn("result",result);
                  localStorage.setItem('login', JSON.stringify({
                      login:true,
                      token:result.token
                  })
                  )
              }) */
          })
          .then(localStorage.setItem("username", body.username))
          .catch(error=>{
              console.log(error)
          })
      }






      static RegisterUser(body) {

        return fetch('http://127.0.0.1:8000/api/users/', {
          'method':'POST',
          headers: {
              'Content-Type':'application/json',
              
            }, 
            body:JSON.stringify(body)
  
        }).then(resp => resp.json())
  
      }


      


}