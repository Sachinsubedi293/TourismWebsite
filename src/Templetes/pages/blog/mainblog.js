import React, { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-bootstrap';


const Mainblog = ()=>{
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

  
  
  return(
  <>

       {Api.map(blog=>(<div key={blog.title}>
        <img  style={{width:"100%"}} src={blog.image}  alt={blog.title} />


                  <div className="col-md-6 px-0" style={{position: "absolute", top:"70%"}}>
                    <h1 className="display-4 font-italic text-light"  >{blog.title}</h1>
                    
                    <p className="lead mb-0"><Link className="text-white font-weight-bold" to={"/Detailpage/"+blog.id}>Continue reading....</Link></p>
                </div>
                <div className="col-md-2 px-0" style={{position: "absolute", top:"90%", right: "0%"}}>
                    <h5 className="font-italic text-danger ">-{blog.author}</h5>
                    <div className="lead mb-0"><h6 className="text-danger font-weight-bold" >{blog.created_on}</h6></div>
                    </div>
         </div>
  
        ))}

 
  </>
  );
       }
  export default Mainblog;