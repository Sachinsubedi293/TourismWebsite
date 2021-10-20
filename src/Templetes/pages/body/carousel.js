import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'aos/dist/aos.css';
import images from '../Resources/kathmandu.jpg';





const Carousel = ()=>{
    const [Api, setApi] =useState([]);
    
    useEffect(()=>{
      axios.get(`https://tourism-data.herokuapp.com/api/visit/`)
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
            
         
            <div id="c" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#c" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    {Api.map(card=>( 
    <span  key={card.name}><button type="button" data-bs-target="#c" data-bs-slide-to={card.id} aria-label={"Slide "+card.id}></button> </span>  ))}
    

  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">

      <img src={images} className="d-block w-100 container-fluid p-0"  alt="main-image" />
        <div className="carousel-caption d-none d-md-block">
         <b> <h3 className="text-danger "  style={{backgroundColor:"#7e7e8562"}}>
           If you Liked our Website then please give us Feedback.
 </h3></b>
        <div className="slider-btn">
        <button className="btn btn-1 btn btn-outline-danger">Feedback</button>
        
        </div>
      </div>
    </div>
    {Api.map(card=>(<div key={card.name} className="carousel-item">
        <img src={card.image} className="container-fluid p-0" alt={card.name} style={{maxHeight:"850px",}} />
        <div className="carousel-caption d-none d-md-block">
         <b>
<h3 className="text-danger" style={{backgroundColor:"#7e7e8562"}}>
  {card.name}
</h3>
          </b>
           <div className="slider-btn">
         <Link to={"/detail-page/"+card.id}><button className="btn btn-1 btn btn-outline-danger ">Know More</button></Link>
        
         </div>
       </div>
      </div>))}
    
       
  <button className="carousel-control-prev" type="button" data-bs-target="#c"  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  
  <button className="carousel-control-next" type="button" data-bs-target="#c"  data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


          
       
        </>
        );
             }
 export default Carousel;