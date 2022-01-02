
import axios from 'axios'
export default class ApiService{



    

    static updateArticle(id, body,token){

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
    }


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

        
        return fetch('http://127.0.0.1:8000/api/v1/booking/savebooking', {
          'method':'POST',
          headers: {
              'Content-Type':'application/json',
              
            }, 
            body:JSON.stringify(body)
  
        }).then(resp => resp.json())
  

      }



      static loginUser(body){
          return axios.post('http://127.0.0.1:8080/login', body)
          .then(resp => {
              console.log(resp)
 /*              resp.json().then((result)=>{
                  console.warn("result",result);
                  localStorage.setItem('login', JSON.stringify({
                      login:true,
                      token:result.token
                  })
                  )
              }) */
          })
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