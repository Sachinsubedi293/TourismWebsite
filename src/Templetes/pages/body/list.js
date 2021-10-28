import React, { useEffect,useState} from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'react-bootstrap';

import { Link } from 'react-router-dom';



const List = ()=>{
  const [Api, setApi] =useState([]);

  useEffect(()=>{
    axios.get(`https://tourismdatabase.herokuapp.com/api/visit/`)
    .then((res)=>{
      console.log(res.data);
      setApi(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
 
  return(
  <>
      
   
    {Api.map(card=>( 
        <div key={card.name}>
      <ul type="none" className="text-center">
      <li> <Link key={card.id} to={"/detailvisit/"+card.id}>
          {card.name}
       </Link></li>
   </ul>
   </div>
  
    ))}
    
 
  </>
  );
       }
  export default List;