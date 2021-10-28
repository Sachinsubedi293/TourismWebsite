import React, { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-bootstrap';


const CardBlog = ()=>{
  const [Api, setApi] =useState([]);


useEffect(()=>{

axios.get(`https://tourismdatabase.herokuapp.com/api/blogs/${4}`)

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

  if (Api.length === 0) {
    return <div>Loading...</div>
  }
  else{
  
  return(
  <>

       {Api.map(card=>( 
                <div className="row p-0">
                 <img src={card.image} className="container-fluid p-0" alt={card.title}/>
                 <div className="container-fluid">
                   <div className=" text-danger container-fluid h2 " >{card.title}</div>
                   <div className=" container-fluid h5" >{card.created_on}</div>
                   <div className=" container-fluid text-success h5" >-{card.author}</div>
                   <div className="text-center"><Link key={card.id} to={"/detailpage/"+card.id}><input type="button" className="btn btn-outline-danger" value="Know More"></input></Link></div><br/>
                 </div>
                </div>
              
                
        ))}

 
  </>
  );}
       }
  export default CardBlog;