import React ,{useState} from 'react';
import Axios from 'axios';
import headset from './images/headset.jpg'
import shoes from './images/shoes.jpg'
import sunglasses from './images/sunglasses.jpg'
import watsh from './images/watsh.jpg'


const Products = () => {
    Axios.defaults.withCredentials = true;

    const [mess, setMess] = useState('');
    const [auth, setAuth] =useState(false);
    const [ide, setIde] =useState(0);
    const [productName, setProductName]= useState('');
    const [productPrice, setProductPrice]= useState('');

    const getSpecs= (e)=>{
        const id = e;
        Axios.post('https://shopping-jad.herokuapp.com/specifications',{
            id: id
        }).then((res)=>{
            if(res.data.auth){    
                setAuth(true);
                setIde(res.data.result.id);
                setProductName(res.data.result.product_name);
                setProductPrice(res.data.result.product_price);
            }else{
                setMess(res.data.message);

            }
            

            
          
       
        })
        setMess('');
        setAuth(false);

    }
    return (  
        <section className='grid-products'>
            <div className='card'>
                <img src={headset} alt="eww" className='images'/>
                <button id="show-specs" onClick={()=>getSpecs(1)}>Specification</button>
                {auth && ide === 1 && <div><h1> {productName}</h1> <h1>{productPrice}</h1> </div>}
                
            
            </div>
            <div className='card'>
                <img src={shoes} alt="eww" className='images'/>
                <button id="show-specs" onClick={()=>getSpecs(2)}>Specification</button>
                {auth && ide === 2 && <div><h1> {productName}</h1> <h1>{productPrice}</h1></div>}
                
            
            </div>
            <div className='card'>
                <img src={sunglasses} alt="eww" className='images'/>
                <button id="show-specs" onClick={()=>getSpecs(3)}>Specification</button>
                {auth && ide === 3 && <div><h1> {productName}</h1> <h1>{productPrice}</h1></div>}
                
            
            </div>
            <div className='card'>
                <img src={watsh} alt="eww" className='images'/>
                <button id="show-specs" onClick={()=>getSpecs(4)}>Specification</button>
                {auth && ide === 4 && <div><h1> {productName}</h1> <h1>{productPrice}</h1></div>}
                
            
            </div>
            <h1>{mess}</h1>
            
            


        </section>
    );
}
 
export default Products
