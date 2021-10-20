import React, { useState } from 'react';
import we from '../pages/Resources/card.png';
import paypal from '../pages/Resources/paypal-logo1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = ()=>{
    const[Feed, setFeed] =useState();
    const[subscribe, setsubscribe] =useState();
function Feedback(){
    setFeed(true);
    var content = document.getElementById('content').value;
    console.warn(content);
  var author = document.getElementById('user').value;
    console.warn(author);
	const feedback = {
		content: content,
		author: author,
	};
	axios.post(`http://192.168.0.100:8888/api/feedback/`, feedback)
	.then(res => console.log(res.data)
    );
    }

function Subscriber()
{
setsubscribe(true);
var email = document.getElementById('subscriber_email').value;

console.warn(email);

const subscriber = {
    email: email,
};
axios.post(`http://192.168.0.100:8888/api/subscriber/`, subscriber)
.then(res => console.log(res.data));
}
    return(
   <div>
       <a name="contact"></a>
     <footer className="footer_widgets row mt-5 gx-3 " >
  <div className="footer_top">
      <div className="container">
          <div className="row">
              

              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="widgets_container text-center">
                      <h3 className="texts_footer" >Information</h3>
                      <div className="footer_menu ">
                          <ul>
                              This website is in developing process we are making it perfect to use so give your feedback by contacting us.
                              
                          </ul>
                          <ul>
                              We Accepts
                              <img src={we} alt="Payment" className="container-fluid"/>
                              <img src={paypal} alt="Paypal" className="container-fluid" />
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="widgets_container contact_us text-center">
                      <h3 className="texts_footer">Contact Us</h3>
                      <div className="footer_contact text-center">
                          <p>Address: Kalanki, Kathmandu, Nepal</p>
                          
                          <p>Phone: <a className="texts_footer" href="tel:+9779840738115" target="_blank">(+977) 9840738115</a> </p>
                          
                          <p>Email: <a className="texts_footer" href="mailto:sachinsubedi616@gmail.com" target="_blank">sachinsubedi616@gmail.com</a></p>
                          
                          <ul >

                              
                              <a className="texts_footer" href="https://www.facebook.com/" title="facebook" ><i className="fa fa-2x fa-facebook" aria-hidden="true"></i></a>
                              <a className="texts_footer1" href="https://www.instagram.com/" title="instagram" ><i className="fa fa-2x fa-instagram" aria-hidden="true"></i></a>
                          </ul>
                        
                      </div>
                  </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="widgets_container contact_us">
                      
                                                  
                     <h3 title="Subscribe us for take big opportunitys (We will send you email for diffrent news)" className="texts_footer text-center">Subscribe Newsletter</h3>

                      <div className="newleter-content">
                          {subscribe?<>
                          <p>Thank You for Subscribe us. Now we are able to send different offers and news direct in your E-mail.</p>
                          </>:<>
                            <div className="subscribe_form ">
                              <form  onSubmit={Subscriber}>
                                  <div className="text-center container-fluid  p-0">
                                      <input type="email" id="subscriber_email" placeholder="Email Address" required className="mb-1  form-control rounded  bg-light "/>
                                      <input type="submit" className="btn btn-primary text-center m-0 " value="Subscribe us" />
                                  </div>
                              </form>
                          </div>
                          </>}
                           
                      </div>
                      
                  </div>

                  <div className="footer_custom_links text-center">
                      <a name="feedback"></a>
                      <h3 className="mt-2">Feedback</h3>
                     
                     {Feed?
                      <><p>Thanks for your feedback</p></>:<>
                      <form className="form-control bg-dark outline-danger border-0" onSubmit={Feedback}>
                      <>
                      <input type="text" className="form-control mt-1" id="user"  placeholder="Your Name" required/>
                      <input type="text" className="form-control mt-1" id="content" placeholder="Your Feedback" required/>
                      <input type="submit"   className="btn btn-primary text-center form-control mt-2"  value="Feedback"/>
                      </></form><p> Don't Forget to give feedback. It helps us to make website better.</p></>}
                  </div>

              </div>

          </div>
      </div>
  </div>
  <div className="footer_bottom">
      <div className="container">
         <div className="row">
              <div className="col-lg-12 col-md-12">
                  <div className="copyright_area text-center">
                      <p>Copyright © 2021 <a className="texts_footer" href='/'>Tourism Np.com</a>  All Right Reserved.<br/>Designed And Developed by Group4</p>
                  </div>
                  
              </div>
              
          </div>
      </div>
  </div>
</footer>


     </div>
    )
}
export default Footer;
