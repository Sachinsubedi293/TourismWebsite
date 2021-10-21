import React, { useEffect,useState} from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'react-bootstrap';

import { Link } from 'react-router-dom';
//import { refresh, refreshHard } from 'aos';



const Blog_popular = ()=>{
    const [Api, setApi] =useState([]);


    useEffect(()=>{
    
    axios.get(`https://tourism-data.herokuapp.com/api/blogs/${1}`)
    
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
    
    axios.get(`https://tourism-data.herokuapp.com/api/blogs/${2}`)
    
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
  
  axios.get(`https://tourism-data.herokuapp.com/api/blogs/${3}`)
  
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
  
  axios.get(`https://tourism-data.herokuapp.com/api/blogs/${4}`)
  
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
       <div className=" bg-light text-muted">
       {Api.map(card=>(   <div key={card.title} className="row row-cols-md-2">
                 <div className="col-md-6">
                     <img src={card.image} className="img-fluid" alt={card.title}/>
                 </div>
                 <div className="col-md-6">
                     <h5 className="text-muted"><Link style={{color:"green" }} to={"/Blogdetailpage/"+card.id}>{card.title}</Link></h5>
                     <em >By, {card.author}</em><br/>

                    
                 </div>
                
             </div>))}
             {Api.map(card=>(<div key={card.title}> <em >On, {card.created_on}</em>
             <p>{card.content}</p></div>))}
             <h4>Other Popular Posts</h4>
             <ul type="none">  
             <li>{Api1.map(card=>(  <h6 className="border text-muted text-left"><Link className="nav-link active rounded text-danger" to={"/Blogdetailpage/"+card.id}>{card.title}</Link></h6>  ))}</li>
             <li>{Api2.map(card=>(  <h6 className="border text-muted text-left"><Link className="nav-link active rounded text-danger" to={"/Blogdetailpage/"+card.id}>{card.title}</Link></h6>  ))}</li>
             <li>{Api3.map(card=>(  <h6 className="border text-muted text-left"><Link className="nav-link active rounded text-danger" to={"/Blogdetailpage/"+card.id}>{card.title}</Link></h6>  ))}</li>
             </ul>
         </div>   
 
  </>
  );
       }
  export default Blog_popular;