import React, { useEffect,useState} from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'react-bootstrap';
//import avai from '../Resources/available.png';
import { Link } from 'react-router-dom';
import sale from '../Resources/sale1.png';
import avai from '../Resources/available.png'



const Carda = ()=>{
  const [Api, setApi] =useState([]);

  useEffect(()=>{
    axios.get(`https://tourism-data.herokuapp.com/api/products/`)
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
       <div className="col-md-3" data-aos="zoom-in" data-aos-offset="00">
   <div className="cardgroup container-fluid p-0" >

     
      <Link key={card.id}  to={"/detail-page/"+card.id}>
     <div className="card shadow  mt-3 mb-3 me-5 ms-4"  style={{maxHeight:"540px", height:"510px"}}>
            <img src={card.image} className="card-img-top p-1" style={{maxHeight:"250px"}} alt={card.name}/>
           {card.sale===true?<><img src={sale} className="img" style={{position:"fixed", maxWidth:"100px", maxHeight:"100px"}} alt={card.name}></img></>:<></>} 
            <div className="card-body">
              <h6 className="card-title ">{card.name}</h6>
              <p className="card-text text-danger pt-2 py-auto"><h5>Rs.{card.price}</h5></p>
              {card.available===true?<><img src={avai} alt="available" style={{position:"absolute", maxWidth:"100px", top:"70%" , right:"0%"}}></img></>:<></>}
              </div>        
             <div className="card-footer">
              <p className="card-bottom"><small className="text-muted container-fluid "> {Date(card.created_on)}</small></p>
            </div>
          </div>
    </Link>

    </div>
    </div>
  
  
    ))}
    
 
  </>
  );
       }
  export default Carda;