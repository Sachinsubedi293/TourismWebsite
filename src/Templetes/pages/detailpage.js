import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import a from './Resources/logo.gif';
//import b from './Resources/back.jpg';
//import logo from './Resources/logo2.png';
import 'aos';
import 'react-bootstrap/dist/react-bootstrap';
//import sale from './Resources/Sale.gif';
//import { Checkbox } from 'react-bootstrap';


const Detailpage = (_props) => {
  const [Api, setApi] = useState([]);
  const [Api1, setApi1] = useState([]);
  const id = useParams();

  var id1 = id['id'];
  id1 = parseInt(id1);
  console.log(id1);
  useEffect(() => {

    axios.get(`https://tourism-data.herokuapp.com/api/products/${id1}`)

      .then((res) => {
        var arr = [];
        arr.push(res.data);
        setApi(arr);
        console.log(arr);

      })
      .catch((err) => {
        console.log(err);
      })
  }
    , [id1])
  function onload() {
    if (Api.length > 0) {
      axios.get(`https://tourism-data.herokuapp.com/api/categories/${Api.map(hello => (hello.category))}`)
        .then((res) => {
          var arr = [];
          arr.push(res.data);
          setApi1(arr);
          console.log(arr);
        })
        .catch((err) => {
          console.log(err);
        })
    }

  }
  function click1(e) {
    var a = Api.map(hello => (hello.image));
    e = document.querySelector('a#a');
    e.setAttribute('href', a);
    e = document.getElementById('main');
    e.setAttribute('src', a)
    console.log('Clicked!');
  }
  function click2(e) {
    var a = Api.map(hello => (hello.extraimage1));
    e = document.querySelector('a#a');
    e.setAttribute('href', a);
    e = document.getElementById('main');
    e.setAttribute('src', a)
    console.log('Clicked!');
  }
  function click3(e) {
    var a = Api.map(hello => (hello.extraimage2));
    e = document.querySelector('a#a');
    e.setAttribute('href', a);
    e = document.getElementById('main');
    e.setAttribute('src', a)
    console.log('Clicked!');
  }
  function click4(e) {
    var a = Api.map(hello => (hello.extraimage3));
    e = document.querySelector('a#a');
    e.setAttribute('href', a);
    e = document.getElementById('main');
    e.setAttribute('src', a);
    console.log('Clicked!');
  }
  function convert(e) {
    var a = Api.map(hello => (hello.price));
    console.log(a);
    var b = document.getElementById('quantity').value;
    var all = a * b;
    e = document.getElementById('input').innerHTML = all;
  }



  function myClick() {
    alert("This website is in developing process.");
  }
  var a = Api.map(a => (a.available));
  return (
    <>
      {
        Api && Api.map(newapi => (
<div className="container-fluid mb-5">
          <section  onLoad={onload}>

            <div className="row row-cols-md-2  p-0">
              <div className="col col-md-6 mb-5 mt-2 rounded p-0">

                <a href={newapi.image} id="a" className="p-0" style={{ backgroundColor: "white" }} >
                  <img src={newapi.image} className="container-fluid z-depth-1 rounded shadow image-main " id="main" alt={newapi.name} />
                </a>

                <div className="row row-cols-md-4 mt-2 container-fluid">
                  <div className="col">
                    <div className="card shadow me-1 ms-1  mb-2 rounded text-center" style={{ maxWidth: "4cm" }}>
                      <img src={newapi.image} className="container-fluid p-0" onClick={click1} alt={newapi.name} style={{ maxWidth: "4cm" }} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow me-1 ms-1 mt1 mb-2 text-center rounded" style={{ maxWidth: "4cm" }}>
                      <img src={newapi.extraimage1} className="container-fluid p-0" onClick={click2} alt={newapi.name} style={{ maxWidth: "4cm" }} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow me-1 ms-1 mt1 mb-2 text-center rounded" style={{ maxWidth: "4cm" }}>
                      <img src={newapi.extraimage2}  className="container-fluid p-0" onClick={click3} alt={newapi.name} style={{ maxWidth: "4cm" }} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow me-1 ms-1 mt1 mb-2 text-center rounded" style={{ maxWidth: "4cm" }}>
                      <img src={newapi.extraimage3} className="container-fluid p-0" onClick={click4} alt={newapi.name} style={{ maxWidth: "4cm" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <h4><b>{newapi.name}</b></h4>
                {Api1.map(cata => (
                  <p className="mb-2 text-muted text-uppercase small"><h6>Catagory: <span className="text-danger">{cata.name}</span></h6></p>))}
                <i className="fas fa-star fa-sm text-primary"></i>
                <i className="fas fa-star fa-sm text-primary"></i>
                <i className="fas fa-star fa-sm text-primary"></i>
                <i className="fas fa-star fa-sm text-primary"></i>
                <i className="fas fa-star fa-sm text-primary"></i>
                <i className="far fa-star fa-sm text-primary"></i>
                <p><span className="mr-1"><h5><b>PRICE: <span className="text-danger">Rs. <span id="price" name="price" value={newapi.price} >{newapi.price}.00</span>
                </span></b></h5></span></p>
                <p className="pt-1">
                  <div ><textarea className="container-fluid" value={newapi.description} readOnly style={{ minHeight: "400px", borderRadius: "0px", borderWidth: "0px", outlineWidth: "0px" }}></textarea></div></p>
                <div className="table-responsive">
                  <table className="table table-sm table-borderless mb-0">
                    <tbody>
                      <tr>
                        <th className="pl-0 w-25" scope="row"><h5><b> Available: {newapi.available ? <><input type="checkbox" size="50px" checked readOnly /><span></span></> : <><input type="checkbox" id="un" size="50px" readOnly disabled /><span></span></>}</b></h5> </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <div className="table-responsive mb-2">
                  <table className="table table-sm table-borderless">
                    <tbody>
                      <tr>
                        <td className="pl-0 pb-0 w-25 text-center"><h5><b> Quantity:</b> </h5></td>
                        <td className="pb-0 text-center"><h5><b>Select size:</b> </h5></td>
                      </tr>
                      <tr>
                        <td className="pl-0">
                          <div className="def-number-input number-input safari_only mb-0">
                            <div className="btn-group">
                              <input className="text form-control" min="1" name="quantity" id="quantity" type="number" defaultValue="1" />
                              <input type="button" onClick={convert} value="OK" />
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="mt-1">
                            <div className="form-check form-check-inline pl-0">
                              <input type="radio" className="form-check-input" id="small" name="materialExampleRadios"
                                checked />
                              <label className="form-check-label small text-uppercase card-link-secondary"
                                htmlFor="small"><h6> Small</h6></label>
                            </div><br />
                            <div className="form-check form-check-inline pl-0">
                              <input type="radio" className="form-check-input" id="medium" name="materialExampleRadios" />
                              <label className="form-check-label small text-uppercase card-link-secondary"
                                htmlFor="medium" ><h5> Medium</h5></label>
                            </div><br />
                            <div className="form-check form-check-inline pl-0">
                              <input type="radio" className="form-check-input" id="large" name="materialExampleRadios" />
                              <label className="form-check-label small text-uppercase card-link-secondary"
                                htmlFor="large"><h4>Large</h4></label>
                            </div><br />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <div className="text-center">
                  <h4><b>Your total amount is:</b></h4>
                  <span className="text-center text-danger">Rs.<span className="text-danger fw-bolder" id="input">0</span>.00</span>
                  <br />
                  <div className="mt-4 text-center">
                    <input type="button" onClick={myClick} className="btn me-4 btn-outline-danger" value="Add to Cart" />
                    <input type="button" onClick={myClick} className="btn me-4 btn-outline-primary" value="Buy Now" />
                  </div>

                </div>

              </div>

            </div>

          </section>
          </div>
        ))
      }

    </>
  )
}

export default Detailpage;