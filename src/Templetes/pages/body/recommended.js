import React, { useEffect,useState} from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'react-bootstrap';
import { Link } from 'react-router-dom';



const Recommended = ()=>{
  const [Api, setApi] =useState([]);


  useEffect(()=>{
  
  axios.get(`https://tourismdatabase.herokuapp.com/api/visit/${5}`)
  
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

  const [Api1, setApi1] =useState([]);


  useEffect(()=>{
  
  axios.get(`https://tourismdatabase.herokuapp.com/api/visit/${6}`)
  
  .then((res)=>{
    var arr = [];
    arr.push(res.data);
    setApi1(arr);
    console.log(arr);
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])

  const [Api2, setApi2] =useState([]);


  useEffect(()=>{
  
  axios.get(`https://tourismdatabase.herokuapp.com/api/visit/${7}`)
  
  .then((res)=>{
    var arr = [];
    arr.push(res.data);
    setApi2(arr);
    console.log(arr);
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])

  const [Api3, setApi3] =useState([]);


  useEffect(()=>{
  
  axios.get(`https://tourismdatabase.herokuapp.com/api/visit/${8}`)
  
  .then((res)=>{
    var arr = [];
    arr.push(res.data);
    setApi3(arr);
    console.log(arr);
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])
  
  return(
  <>
      
   
  {Api.map(card=>( 
   <div className="col-md-3" data-aos="zoom-in-down" data-aos-offset="200">
   <div className="cardgroup" >

     
   <Link key={card.id} to={"/detailvisit/"+card.id}>
     <div className="card shadow  mt-3 mb-3 me-3 ms-4" style={{maxHeight:"520px",minHeight:"330px"}}>
            <img src={card.image} className="card-img-top p-1" style={{maxHeight:"200px",minHeight:"200px"}} alt={card.name}/>
            <div className="card-body">
              <h4 className="card-title">{card.name}</h4>
             
              </div>
              <div className="card-subtitle container-fluid text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
            
               </div>
              <div className="card-footer">
              <p className="card-text"><small className="text-muted ">{card.created}</small></p>
            </div>
          </div>
    </Link>

    </div>
    </div>   ))}  
    
   {Api1.map(card=>( 
    <div className="col-md-3" data-aos="zoom-in-up" data-aos-offset="200">
   <div className="cardgroup" >

     
   <Link key={card.id} to={"/detailvisit/"+card.id}>
     <div className="card shadow  mt-3 mb-3 me-3 ms-4" style={{maxHeight:"520px",minHeight:"330px"}}>
            <img src={card.image} className="card-img-top p-1" style={{maxHeight:"200px",minHeight:"200px"}} alt={card.name}/>
            <div className="card-body">
              <h4 className="card-title">{card.name}</h4>
             
              </div>
              <div className="card-subtitle container-fluid text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
            
               </div>
              <div className="card-footer">
              <p className="card-text"><small className="text-muted ">{card.created}</small></p>
            </div>
          </div>
    </Link>

    </div>
    </div>   ))}

  {Api2.map(card=>( 
 <div className="col-md-3" data-aos="zoom-in-down" data-aos-offset="200" >
 <div className="cardgroup" >

 <Link key={card.id} to={"/detailvisit/"+card.id}>
     <div className="card shadow  mt-3 mb-3 me-3 ms-4" style={{maxHeight:"520px",minHeight:"330px"}}>
            <img src={card.image} className="card-img-top p-1" style={{maxHeight:"200px",minHeight:"200px"}} alt={card.name}/>
            <div className="card-body">
              <h4 className="card-title">{card.name}</h4>
             
              </div>
              <div className="card-subtitle container-fluid text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
            
               </div>
              <div className="card-footer">
              <p className="card-text"><small className="text-muted ">{card.created}</small></p>
            </div>
          </div>
    </Link>

  </div>
  </div>   ))}

  {Api3.map(card=>( 
  <div className="col-md-3" data-aos="zoom-in-up" data-aos-offset="200">
  <div className="cardgroup" >

    
  <Link key={card.id} to={"/detailvisit/"+card.id}>
     <div className="card shadow  mt-3 mb-3 me-3 ms-4" style={{maxHeight:"520px",minHeight:"330px"}}>
            <img src={card.image} className="card-img-top p-1" style={{maxHeight:"200px",minHeight:"200px"}} alt={card.name}/>
            <div className="card-body">
              <h4 className="card-title">{card.name}</h4>
             
              </div>
              <div className="card-subtitle container-fluid text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
            
               </div>
              <div className="card-footer">
              <p className="card-text"><small className="text-muted ">{card.created}</small></p>
            </div>
          </div>
    </Link>

   </div>
   </div>   ))}
 
  </>
  );
       }
  export default Recommended;