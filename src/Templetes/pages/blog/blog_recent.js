import React, { useEffect,useState} from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'react-bootstrap';

import { Link } from 'react-router-dom';
// import { refresh, refreshHard } from 'aos';



const Blog_recent = ()=>{
    const [Api, setApi] =useState([]);


    useEffect(()=>{
    
    axios.get(`https://tourismdatabase.herokuapp.com/api/blogs/${3}`)
    
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
    
    axios.get(`https://tourismdatabase.herokuapp.com/api/blogs/${4}`)
    
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
  
  axios.get(`https://tourismdatabase.herokuapp.com/api/blogs/${5}`)
  
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
 
  return(
  <>
      
   
   
        <>
        <div className="text-light" style={{backgroundColor: "#4CAF50"}}>
        <h3><i className="far fa-clock"></i> Recent Posts</h3> 
     </div>
     <ul type="none">
     <li>{Api.map(card=>(  <h6 className="border text-muted text-left" ><Link className="nav-link active rounded text-danger" to={"/Blogdetailpage/"+card.id} >{card.title}</Link></h6>  ))}</li>
    <li> {Api1.map(card=>(  <h6 className="border text-muted text-left"><Link className="nav-link active rounded text-danger" to={"/Blogdetailpage/"+card.id}>{card.title}</Link></h6>  ))}</li>
     <li>{Api2.map(card=>(  <h6 className="border text-muted text-left"><Link className="nav-link active rounded text-danger" to={"/Blogdetailpage/"+card.id}>{card.title}</Link></h6>  ))}</li>
     </ul>
  </>
  
  
    
 
  </>
  );
       }
  export default Blog_recent;