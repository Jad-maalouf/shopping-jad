import React ,{useState,useEffect} from 'react';
import Axios from 'axios';

const Profile = (props) => {

    const [key, setKey]  = useState([]);
    const [value, setValue]  = useState([]);
    const [edit, setEdit] = useState('');

    Axios.defaults.withCredentials = true;

    console.log(props.name);
    useEffect(() => {
        Axios.post('https://shopping-jad.herokuapp.com/profile', {name: props.name}
    
        ).then( 
            (response)=>{
           // console.log(response.data.result[0]);
                if(response.data.log){
                    const infos = response.data.result[0]
                    const key = Object.keys(infos);
                    const value = Object.values(infos);
                    setValue(value);
                    setKey(key);
                }
           
    
         
        })
        
    },[props.name]);
    const editing = (event)=>{
        console.log(event);
        Axios.put('https://shopping-jad.herokuapp.com/update',{
            valeur: edit,
            index: event,
            name : props.name
        })

    }
    return ( 
        <div className="profile">
         <ul className="key-list">{key.map(k=> (<li  className="lis">{k.toString()}: </li>)  )}</ul> 
         <ul >{value.map((v,index)=> (<li >{v.toString()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input placeholder='edit' id='edit' onChange={(e)=>setEdit(e.target.value)}></input><button onClick={()=>editing(index)}>Edit</button></li>) )}</ul> 
         
        </div>
     );
}
 
export default Profile;