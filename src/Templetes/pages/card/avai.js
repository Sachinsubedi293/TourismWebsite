import React, { useEffect,useState} from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'react-bootstrap';
import avai from '../Resources/available.png';
//import { Link } from 'react-router-dom';



const Avai = ()=>{
  const [Api, setApi] =useState([]);
  
  useEffect(()=>{
    axios.get(`https://tourismdatabase.herokuapp.com/api/products/`)
    .then((res)=>{
    
      console.log(res.data);
      setApi(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
var arr = [];
arr.push(Api.map(a=>(a.sale)));
console.log(arr);
  return(
<div>
</div>
  
    );
  

   
}
export default Avai;
