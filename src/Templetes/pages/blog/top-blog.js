import React, { useEffect,useState} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';
//import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-bootstrap';


const Topblog = ()=>{
  const [Api, setApi] =useState([]);


useEffect(()=>{

axios.get(`https://tourismdatabase.herokuapp.com/api/blogs/${4}`)

.then((res)=>{
  var arr = [];
  arr.push(res.data);
  setApi(arr);
  console.log(arr);
})
.catch((err)=>{
  console.log(err);
})
},[])

  
  
  return(
  <>

       {Api.map(card=>( 
                
                <div key={card.title} className="card" >
                <img src={card.image} className="card-img-top" alt={card.title}/>
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <div className="card-subtitle text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
                            -{card.author}
                           </div>
                  </div>
              </div>
                   
              
                
        ))}

 
  </>
  );
       }
  export default Topblog;