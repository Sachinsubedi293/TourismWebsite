import React, { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import Aos from 'aos';
import 'aos/dist/aos.css';
//import { useParams } from 'react-router-dom';
import Carda from './card/carda';
import Card_Blog from './card/card-blog';
import Popularcard from './card/popularcard';
import sale from './Resources/60sale.jpg';





const Card = ()=>{
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
            
           <Card_Blog />
           
      {/* <!--now-->  */}
        <h2><strong><p className=" text-center mt-3"   > PRODUCTS<hr/></p></strong> </h2>
       
      
    <div className="row mt-2 pb-3">    
<Carda />
        </div> 

 
        
    
       
 {/* <!-- carocel -->  */}
 <div className="row row-cols-md-3 p-0 container-fluid">
   <div className="col"><div className="container-fluid" > <img className="container-fluid" src={sale} alt="salecard"></img></div></div>
   <div className="col container-fluid">
<div id="b" className="carousel slide rounded container" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#b" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    {Api.map(card=>( 
    <button type="button" data-bs-target="#b" data-bs-slide-to={card.id} aria-label={"Slide"+card.id}></button>   ))}
    

  </div>
  <div className="carousel-inner text-center " style={{maxHeight:"400px"}}>
    <div className="carousel-item active">

      <img src="Resources/kathmandu.jpg" className="d-block w-100 container-fluid p-0" alt="Main" />
        <div className="carousel-caption d-none d-md-block">
         <b> <h3 className="text_car1 "  style={{backgroundColor:"#7e7e8562"}}>
           If you Liked our Website then please give us Feedback.
 </h3></b>
        <div className="slider-btn">
        <button className="btn btn-1 btn btn-outline-light">Feedback</button>
        
        </div>
      </div>
    </div>
    {Api.map(card=>(<div className="carousel-item text-center" style={{verticalAlign: "bottom"}}>
        <img src={card.image} className=" p-0" alt={card.name}  />
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
    
       
  <button className="carousel-control-prev" type="button" data-bs-target="#b"  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  
  <button className="carousel-control-next" type="button" data-bs-target="#b"  data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

</div>
<div className="col"><div className="container-fluid" > <img className="container-fluid" src={sale} alt="salecard"></img></div></div>

</div>
          {/* <!-- then  -->  */}
          <div className="row mt-2 ms-2 me-2 mb-2"  >
            <div className="col-md-19 col-12 shadow ">
              <p><i className="fa fa-search text-muted" aria-hidden="true" style={{left:"2%"}}>Top Products...</i><hr/></p>
              <div className="row row-cols-1 row-cols-md-4 g-4"  >
             <Popularcard/>
            </div>
            </div>
          </div>




  
    </>
 
  );
  }
  export default Card;