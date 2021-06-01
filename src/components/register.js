import React ,{useState} from 'react';
import Axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [job, setJob] = useState('');
    const [education, setEducation] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [password, setPassword] = useState('');
    

    const register = ()=>{
        Axios.post('https://shopping-jad.herokuapp.com/register',{
           name: name,
           lastname: lastName,
           email: email,
           telephone: telephone,
           job: job,
           education: education,
           address: address ,
           age: age,
           gender: gender,
           hobbies: hobbies ,
           password: password
        }).then((response)=>{
            console.log(response);
        })

    }
    return (  
    <div className="register-form">
        <label>Name: </label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <label>Lastname:</label>
        <input type="text" onChange={(e)=>{setLastName(e.target.value)}}/>
        <label>Email:</label>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>password:</label>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <label>Telephone:</label>
        <input type="text" onChange={(e)=>{setTelephone(e.target.value)}}/>
        <label>Job :</label>
        <input type="text" onChange={(e)=>{setJob(e.target.value)}}/>
        <label>Education: </label>
        <input type="text" onChange={(e)=>{setEducation(e.target.value)}}/>
        <label>Address: </label>
        <input type="text" onChange={(e)=>{setAddress(e.target.value)}}/>
        <label>Age: </label>
        <input type="number" onChange={(e)=>{setAge(e.target.value)}}/>
        <label>Gender: </label>
        <div className="gender">
        <input type="radio" id="male" value="male"  onClick={(e)=>{setGender(e.target.value)}}/>
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" value="female" onClick={(e)=>{setGender(e.target.value)}}/>
        <label htmlFor="female">Female</label>
        </div>
        <label>Hobbies: </label>
        <input type="text"  onChange={(e)=>{setHobbies(e.target.value)}}/>

        <button onClick={register}>Register</button>



    </div>
    );
}
 
export default Register

