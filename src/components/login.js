import React ,{useEffect, useState}from 'react';
import Axios from 'axios';
import Profile from './profile' ;
// const bcrypt = require('bcryptjs');

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [status, setStatus]=useState('');

    const[profile, setProfile] = useState(false);

    Axios.defaults.withCredentials = true;

const login = () => {
  
       
        Axios.post('https://shopping-jad.herokuapp.com/login',{
            name: name,
            password: password
        }).then((response)=>{
           
            if(!response.data.log){
                setStatus(response.data.message)
            }else{
                setProfile(true);
            }
        })
       
        setStatus('');
    }
    useEffect(()=>{
        Axios.get('https://shopping-jad.herokuapp.com/login').then((res)=>{
            if(res.data.auth){
                setProfile(true)
            }
        })
    },[])
    

   
    
    const  logout =   () =>{
       
        Axios.post('https://shopping-jad.herokuapp.com//logout',{withCredentials: true, credentials: 'include'})
        .then(response=>console.log(response))
        .catch(err=>console.log(err));

        setProfile(false);
        setName('');
        setPassword('');
    }
  
    return (
       <section>
       
           
          {profile && <div>
               <Profile name={name}/>
               <button onClick={logout}>Logout</button>
               
           </div> 
           }
           {!profile &&
        <div className="log-form">
            <input type="text" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button id="log-btn" onClick={login}>Login</button>
            {status && <h1>{status}</h1>}
        </div> }
        
        </section>
      );
}
 
export default Login;
