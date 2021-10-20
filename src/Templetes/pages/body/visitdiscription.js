import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import List from './list';
//import {Link} from 'react-router-dom';
import 'aos';
import 'react-bootstrap/dist/react-bootstrap';

const VisitDiscription = (props)=>{
    const [Api, setApi] =useState([]);
    const id = useParams();
    

    var id1 = id['id'];
    id1 = parseInt(id1);
  console.log(id1);
useEffect(()=>{

  axios.get(`https://tourism-data.herokuapp.com/api/visit/${id1}`)

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
  <div>
    {
      Api && Api.map(newapi=>(
        <div>
        <div>
        <div id="b" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#b" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#b" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#b" data-bs-slide-to="2" aria-label="Slide 3"></button>
             
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={newapi.image} className="d-block w-100" alt={newapi.name} />
              </div>
                <div className="carousel-item">
                  <img src={newapi.image1} className="d-block w-100" alt={newapi.name} />
                </div>
                <div className="carousel-item">
                  <img src={newapi.image2} className="d-block w-100" alt={newapi.name} />
                </div>

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
    
    {/* // carousel end  */}
    <div className="container">
     <div className="row rows-cols-md-2 mt-3">
         <div className="col-md-10  shadow text-center">
    <h1>{newapi.name}</h1>
    <hr/>
    <hr/>
    <div>
    <h4>{newapi.description}</h4>
    </div>
    <h1>Map of {newapi.name}</h1>
    <hr/>
    <img style={{maxWidth:"900px"}} className="container-fluid" src={newapi.map_image} alt={newapi.name} />
    <div>
    <h4>{newapi.map_description}</h4>
    </div>
    </div>
         <div className="col shadow text-center">
    <h2>Other Places</h2>
    <hr/>
    <hr/>
    <List />

    
    </div>
     </div>
    </div>
    </div>
      
      ))
    }
  </div>
)

  }
 
export default VisitDiscription;

