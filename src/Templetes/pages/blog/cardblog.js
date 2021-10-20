import React, { useEffect,useState} from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'react-bootstrap';
import { Link } from 'react-router-dom';



const Cardblog = ()=>{
  const [Api, setApi] =useState([]);


  useEffect(()=>{
  
  axios.get(`https://tourism-data.herokuapp.com/api/blogs/${4}`)
  
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

  const [Api1, setApi1] = useState([]);


  useEffect(()=>{
  
  axios.get(`https://tourism-data.herokuapp.com/api/blogs/${5}`)
  
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
  
  return(
  <>
      
   
      {Api.map(blog=>( 
    
       <div key={blog.title} className="col-md-6">
       <div
           className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" key={blog.id}>
           <div className="col p-4 d-flex flex-column position-static">
               <h3 className="mb-0">{blog.title}</h3>
               <div className="mb-0 text-muted">{blog.created_on}</div>
        
               <Link className="text-blue font-weight-bold" to={"/Detailpage/"+blog.id}>Continue reading...</Link>
           </div>
           <div className="col-md-6 d-none d-lg-block">
             
                       <img src={blog.image} alt={blog.title} style={{maxHeight:"6cm"}} />
              

           </div>
       </div>
   </div>
  
   ))}
    
   {Api1.map(blog=>( 

<div key={blog.title} className="col-md-6">
<div
    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" key={blog.id}>
    <div className="col p-4 d-flex flex-column position-static">
        <h3 className="mb-0">{blog.title}</h3>
        <div className="mb-0 text-muted">{blog.created_on}</div>
 
        <Link className="text-blue font-weight-bold" to={"/Detailpage/"+blog.id}>Continue reading...</Link>
    </div>
    <div className="col-md-6 d-none d-lg-block">
      
                <img src={blog.image} alt={blog.title} style={{maxHeight:"6cm"}} />
       

    </div>
</div>
</div>

   ))}
 
  </>
  );
       }
  export default Cardblog;