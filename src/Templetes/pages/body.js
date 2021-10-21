import React, { useEffect, useState } from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';
import 'aos/dist/aos.css';
import Popular from './body/popular';
import Recommended from './body/recommended';
import Carousel from './body/carousel';
import image from './Resources/tourist-take-pictures-at-poonhill-(2).jpg';
import nepal from './Resources/nepal.jfif';
import sachin from './Resources/sachin.jpg';
import '../Static/body.css'

const Body = () => {
  const [Api, setApi] = useState([]);

  useEffect(() => {
    axios.get(`https://tourism-data.herokuapp.com/api/pictures/`)
      .then((res) => {
        console.log(res.data);

        setApi(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])




  return (
    <>
      {/* <!-- Navbar close -->  */}
      {/* <!-- carocel -->  */}

      <div id="b" className="carousel slide " data-bs-ride="carousel"  >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#b" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          {Api.map(card => (
            <button key={card.name} type="button" data-bs-target="#b" data-bs-slide-to={card.id} aria-label={"Slide" + card.id}></button>))}


        </div>
        <div className="carousel-inner" >
          <div className="carousel-item active">

            <img src="Resources/pokhara.jpg" className="d-block w-100" alt="gg" />
            <div className="carousel-caption d-none d-md-block">
              <b> <h3 className="text_car1 " style={{ backgroundColor: "#7e7e8562" }}>
                If you Liked our Website then please give us Feedback.
              </h3></b>
              <div className="slider-btn">
                <a href="#feedback"> <button className="btn btn-1 btn btn-outline-light">Feedback</button></a>

              </div>
            </div>
          </div>
          {Api.map(card => (<div key={card.name} className="carousel-item text-center">
            <img src={card.image} className="container-fluid p-0" alt={card.name} />
            <div className="carousel-caption d-none d-md-block">
              <b> <h3 className="text_car1 " style={{ backgroundColor: "#7e7e8562" }}>
                If you Liked our Website then please give us Feedback.
              </h3></b>
              <div className="slider-btn">
                <a href="#feedback"> <button className="btn btn-1 btn btn-outline-light">Feedback</button></a>

              </div>
            </div>
          </div>))}


          <button className="carousel-control-prev" type="button" data-bs-target="#b" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#b" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* <!-- carocel close -->  */}
      <div className="mt-0" >
        <div className="row">
          <div className="col-md-19 col-12 mx-auto shadow row-cols-md-1 nep">
            <div className="row">
              <div className="col mx-auto  mt-2 mb-2 "  >
                <b><h1 className="d-flex justify-content-center">Nepal</h1> </b>
                <div className="row">
                  {/* <!--  images div -->  */}


                  <a href={nepal}> <img src={nepal} className="container-fluid mb-4" alt="nepal-map-img" data-aos="fade-up" data-aos-offset="500" /></a>
                </div>
                {/* <!-- details -->  */}
                <div className="row row-cols-md-2 ">

                  <div className="col-md-6 container-fluid"  >

                    <p className="container-fluid mb-1 nep1 text-center" data-aos="slide-left" data-aos-durection="200ms" data-aos-offset="400"> Nepal is a country of highly diverse and rich geography, culture, religions and political instability. The mountainous north contains eight of the world’s ten highest Himalayan Mountains, including the highest, Mount Everest. Nepal’s faces many problems caused by governmental clashes, surrounded by the complex situation that is Nepalese politics.

                      The fertile and humid south is heavily urbanized. By some measures, Hinduism is practiced by a greater majority of people in Nepal than in any other nation. As of the 2011 census, 81.3 of the Nepalese population is Hindu, 9.0% is Buddhist, 4.4% is Muslim, 3.0% is Kirant/Yumaist, 1.4% is Christian, and 0.9% follow other religions or none religion. The natural scenery, high mountains,…show more content…
                      Therefore, the government is placing high priority on the tourism sector in its new economic development policy. As there is a favorable political situation in the country, the government is all geared towards economic revolution in the next 10 years to uplift mass. In this connection, government of Nepal in consultation with Nepalese Tourism Industry, concerned organizations and experts decided to launch a national tourism campaign “Nepal Tourism Year 2011“. This announcement reflects the government’s anticipation to bring into at least one million international tourists in Nepal by the year 2011 and spread the benefits of tourism to the people at large. The national campaign also indicates the tourism industry’s exigency to organize a tourism promotion campaign having wider impact.
                    </p><br />
                  </div>
                  <div className="col-md-6" data-aos="slide-right" data-aos-durection="200ms" data-aos-offset="400">
                    <p className="mb1 nep1 text-center">Nepal is a surprisingly diverse country that attracts visitors for many reasons. Some are lured by the call of the mountains and seeking to climb or trek in the Himalayas, others are intrigued by the culture and the famous city of Kathmandu, and yet others come hoping to find some sort of spiritual awakening. Nepal can be an adrenaline adventure, a cultural eye opener, a life-changing experience, or all of the above.

                      Most travelers spend some time in Kathmandu visiting sacred and historic attractions, and then head out to other parts of the country. Some of the best places to visit outside of the capital are Chitwan National Park for wildlife viewing, and the lakeside town of Pokhara, a popular area for embarking on treks.

                      Trekkers will find a variety of options across Nepal, with the most important areas being the Everest, Annapurna, and Langtang regions.

                      In 2015, a major earthquake struck Nepal, causing severe damage in Kathmandu and other areas, but restoration is underway, and progress has been substantial. Much of the damage has been repaired, although some historical treasures were lost forever.

                      To find the best places to visit, have a read through our list of the top attractions in Nepal.<br /><br /><br /><br />
                      <em className="nep1 text-primary" style={{}}>Note: Some businesses may be temporarily closed due to recent global health and safety issues</em>
                    </p>
                  </div>


                </div>

              </div>
            </div>
          </div>
        </div>



        {/* // <!-- card 1 -->  */}
        <div className="row mt-2 ms-2 me-2 mb-2" >
          <div className="col-md-19 col-12 mx-auto shadow ">
            <p><i className="fa fa-search text-muted" aria-hidden="true"> Popular Places </i></p><hr />
            <div className="row row-cols-1 row-cols-md-4 g-4" style={{ overflow: "hidden" }} >
              <Popular />
            </div>
          </div>
        </div>


        {/* carousel  */}
        <Carousel />

        {/* <!-- youtube -->  */}

        {/* <!-- second cards -->  */}
        {/* <!-- card 1 -->  */}
        <div className="row mt-2  mb-2" >
          <div className="col-md-19 col-12 mx-auto shadow ">
            <p><i className="fa fa-search text-muted" aria-hidden="true"> Suitable places to visit in this Month </i></p><hr />
            <div className="row row-cols-1 row-cols-md-4 g-4" style={{ overflow: "hidden" }} >

              <Recommended />


            </div>
          </div>
        </div>

        {/* <!-- About us  -->  */}

        <div className=" mb-3 mt-3" >
          <div className="row container-fluid">
            <div className="col text-center container-fluid">
              <h2 className="ser container-fluid"><div id="about" className="container-fluid">About us</div></h2>
              <div className="row row-cols-md-2" style={{ overflow: "hidden" }}>
                <div className="col-md-6 text-center   services  " style={{ overflow: "hidden" }} data-aos="slide-right" data-aos-offset="200">
                  <h3>Tourism in Nepal</h3>
                  <p >
                    Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.         </p>
                  <p>Nepal with rich ancient cultures set against the most dramatic scenery in the world is a land of discovery and unique experience. For broad minded individuals who value an experience that is authentic and mesmerizing, Nepal is the ideal destination.</p>

                </div>
                <div className="col-md-6  services  " style={{ overflow: "hidden" }} data-aos="slide-left" data-aos-offset="200">
                  <img src={image} className="container-fluid" style={{ width: "100%" }} alt="img" />
                </div>
              </div>
              <div className="col  text-center shadow mb-2 services " >
                <div className="row row-cols-md-2" style={{ overflow: "hidden" }}>

                  <div className="col  text-center shadow mb-2 services ser" data-aos="zoom-in-right" data-aos-offset="200" >
                    <img src="Resources/kumar.png" className="rounded-circle" alt="Kumar" />
                    <h4>Rajkumar Aryal</h4>
                    <h6>Position: CEO<br />
                      Maintain Company And Managers
                    </h6>
                  </div>
                  <div className="col text-center shadow mb-2 services ser" data-aos="zoom-in-left" data-aos-offset="200" >
                    <img src="Resources/sangam.jpg" className="rounded-circle" alt="sangam" />
                    <h4>Sangam Poudel</h4>
                    <h6>Position: WebApp Manager
                      <br />
                      Maintain Web Application And Offers
                    </h6>
                  </div>
                </div>
                <div className="row row-cols-md-3" style={{ overflow: "hidden" }}>
                  <div className="col  text-center shadow mb-2 services ser" data-aos="slide-right" data-aos-offset="200" >
                    <img src="Resources/Nirdesh.jpg" className="rounded-circle" alt="Nirdesh" />
                    <h4>Nirdesh Lama</h4>
                    <h6>Position: Delivary Manager<br />
                      Maintain the Delivary Ordered in our website
                    </h6>
                  </div>
                  <div className="col  text-center shadow mb-2 services ser" data-aos="slide-up" data-aos-offset="200" >
                    <img src="Resources/suman.jpg" className="rounded-circle" alt="Suman" />
                    <h4>Suman Jammakatel</h4>
                    <h6>Position: Tourist Manager
                      <br />
                      Maintain Tourists Who Books Hotels by our Website.
                    </h6>
                  </div>
                  <div className="col  text-center shadow mb-2 services ser" data-aos="slide-left" data-aos-offset="200" >
                    <img src={sachin} className="rounded-circle" alt="Sachin" />
                    <h4>Sachin Subedi</h4>
                    <h6>Position: Product Manager<br />
                      Maintain the Products for website</h6>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* <!-- services  -->  */}

        <div>
          <div className="container-fluid " >
            <div className="row container-fluid p-0">
              <div id="services" className="col text-center container-fluid p-0 ">

                <h1 className="ser container-fluid p-0">Our Services</h1>
                <div className="row rows-cols-md-5  mb-2 text-center container-fluid p-0" style={{ overflow: "hidden" }}>
                  <div className="col col-md shadow mb-2  text-center services container-fluid p-0 m-2 p-2" data-aos="slide-up" data-aos-offset="200">
                    <div data-aos="zoom-in" data-aos-offset="200"> <i className="fa fa-hospital fa-7x mt-1 mb-1 me-1 ms-1" aria-hidden="true">  <h3>Health Care</h3></i>
                      <p>
                        We can take care of anyone traval from this website from different disasters, diseases.
                      </p>
                    </div></div>
                  <div className="col col-md shadow mb-2 services container-fluid p-0  m-2 text-center p-2" data-aos="slide-right" data-aos-offset="200">
                    <div data-aos="zoom-in" data-aos-offset="200"> <i className="fa fa-truck fa-7x mt-1 mb-1 me-1 ms-1" >   <h3>Delivary</h3></i>


                      <p>
                        If you can buy products from this website then we delevere to you in low cost.
                      </p>      </div></div>

                  <div className=" col col-md shadow mb-2 services container-fluid p-0  m-2 text-center p-2" data-aos="flip-up" data-aos-duration="1000ms" data-aos-offset="200">
                    <div data-aos="zoom-out" data-aos-offset="200"> <i className="fa contsiner-fluid fa-hotel fa-7x mt-1 mb-1 me-1 ms-1" ></i><h3>Hotel Booking</h3></div><div>

                      <p>
                        This service is for booking hotels from any country and region in this word.
                      </p>
                    </div>
                  </div>
                  <div className=" col col-md shadow mb-2 services container-fluid p-0 m-2 text-center p-2" data-aos="slide-left" data-aos-offset="200">
                    <div data-aos="zoom-in" data-aos-offset="200"> <i className="fa fa-7x fa-language" aria-hidden="true"><h3>Free language cource</h3></i>


                      <p>
                        We can give free Nepali language cource for those people who wants to learn.
                      </p>
                    </div>
                  </div>
                  <div className="col col-md shadow mb-2 services container-fluid p-0 m-2 text-center p-2" data-aos="slide-up" data-aos-offset="200">
                    <div data-aos="zoom-in" data-aos-offset="200"> <i className="fab fa-paypal fa-7x mt-1 mb-1 me-1 ms-1"><h3>Online pay</h3>
                    </i>
                      <p>
                        We can take money in online medium so you dont need cash in your journey.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>




      {/* test section  */}

    </>
  );
}
export default Body;