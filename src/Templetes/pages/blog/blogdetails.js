import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
//import {Link} from 'react-router-dom';
import Blog_recent from './blog_recents';
import Blog_popular from './blog_popular';

import 'aos';


const Blog_detail = (props)=>{
    const [Api, setApi] =useState([]);
    const [content1, setcontent1] =useState(false);
    const [content2, setcontent2] =useState();
    const [content3, setcontent3] =useState();
    const [content4, setcontent4] =useState();

    const id = useParams();
    

    var id1 = id['id'];
    id1 = parseInt(id1);
  console.log(id1);
useEffect(()=>{

  axios.get(`https://tourism-data.herokuapp.com/api/blogs/${id1}`)

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

console.log(content1);

return(
  <div>
    {
      Api && Api.map(newapi=>(
        
<div key={newapi.title}  className="container">
  <div className="row row-cols-md-2  mt-3">
      <div className="col-md-9">
          <b><h1>TRAVEL BLOGS</h1></b>
          <div className="row border">
              <h4><i className="fa fa-newspaper-o" aria-hidden="true"></i>{newapi.title}</h4>
              <h5><i className="fa fa-id-card" aria-hidden="true"></i> -By, {newapi.author} | <i className="fa fa-calendar-times-o" aria-hidden="true"></i>{Date(newapi.created_on)}</h5>
              <div >
              <img src={newapi.image} sizes="fit" className="container-fluid"  alt={newapi.title} />
              <h6 className="container-fluid">{newapi.content1}</h6><br/>
              <img src={newapi.image1} className="container-fluid"  alt={newapi.title} />
              <h6 className="container-fluid">{newapi.content2}</h6><br/>
              <img src={newapi.image2} className="container-fluid"  alt={newapi.title} />
              <h6 className="container-fluid">{newapi.content3}</h6><br/>
              <img src={newapi.image3} className="container-fluid"  alt={newapi.title} />
              <h6 className="container-fluid">{newapi.content4}</h6><br/>
              
            </div>
          </div>
      </div>
      <div className="col-md-3">
        
         <Blog_recent/>

          <br/>
          <div className="text-light" style={{backgroundColor: "#4CAF50"}}>
            <h3><i className="fa fa-times" aria-hidden="true"></i> Popular Posts</h3> 
         </div>
        
        <Blog_popular/>
      </div>
  </div>
</div>  
      
      ))
    }
  </div>
)

  }
 
export default Blog_detail;

