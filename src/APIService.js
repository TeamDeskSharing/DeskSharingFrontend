
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



      static loginUser(body){
          return axios.post('http://127.0.0.1:8080/login', body)
          .then(resp => {
           //   console.log(resp.data)
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
          .then(resp => localStorage.setItem("token", resp.data))
     
          //.then(localStorage.setItem("token", resp => resp))
          //.then(resp => localStorage.setItem("token2", JSON.stringify(resp.data)))

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