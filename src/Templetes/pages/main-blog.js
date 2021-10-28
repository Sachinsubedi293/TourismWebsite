import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import Aos from 'aos';
import 'aos/dist/aos.css';
//import { useParams } from 'react-router-dom';
import Mainblog from './blog/mainblog';
import Cardblog from './blog/cardblog';
import Topblog from './blog/top-blog';
//import { Card } from 'react-bootstrap';



const Blog = () => {
  const [Api, setApi] = useState([]);

  useEffect(() => {
    axios.get(`https://tourismdatabase.herokuapp.com/api/blogs/`)
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

      <div>
        {/* { uhhidahi */}
        <Mainblog />

        <div className="row mb-2 mt-2">

          <Cardblog />
        </div>
        <main className="container shadow">
          <div className="row">
            <div className="col-md-8">
              {Api.map(blog => (
                <div key={blog.title} className="col-md-12 mt-3 mb-2" >
                  <div className="cardgroup" >


                    <Link key={blog.id} to={"/detailpage/" + blog.id}>
                      <div className="card shadow " style={{ transform: "none" }}>
                        <img src={blog.image} className="card-img-top p-1" style={{ maxHeight: "500px" }} alt={blog.title} />
                        <div className="card-body">
                          <h5 className="card-title ">{blog.title}</h5>
                          <p className="card-text  pt-2 py-auto"><h6>{blog.content1}...</h6></p>
                        </div>
                        <div className="card-subtitle text-danger p-1" style={{ textAlign: "right", bottom: "100%" }}>
                          -{blog.author}
                        </div>
                        <div className="card-footer">
                          <p className="card-text"><small className="text-muted one-line">Updated-on:{blog.created_on}</small></p>
                        </div>
                      </div>
                    </Link>

                  </div>
                </div>
              ))

              }
            </div>

            <aside className="col-md-4">
              <div className="p-4 mb-3 bg-dark text-light rounded">
                <h4 className="font-italic bg-primary rounded">About</h4>
                <p className="mb-0">Here you can read latest news and blogs. If you liked <em>TourismNP.com</em> then give us Feedback. It helps us to make website better.
                </p>
              </div>
              <div className="p-4 bg-success rounded mt-5">
                <h4 className="font-italic bg-info rounded">Archives</h4>
                <ol className="list-unstyled mb-0">
                  {Api.map(blog => (
                    <Link key={blog.title} className="text-white" to={"/Blogdetailpage/" + blog.id}>{blog.title}<br /></Link>

                  ))}
                </ol>
              </div>
              <div className="p-4 bg-light rounded mt-5">
                <h4 className="font-italic bg-danger rounded">Top Blog</h4>
                <div>
                  <Topblog />
                </div>
              </div>
              <div>
                <h5 className="bg-success rounded mt-5">
                  Recent Blogs
                </h5>
                {Api.map(blog => (
                  <Link key={blog.title} className="text-danger" to={"/Blogdetailpage/" + blog.id}>{blog.title}<br /></Link>

                ))}
              </div>
              <div className="p-4 bg-light rounded mt-5">
                <h4 className="font-italic bg-danger rounded">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li><a href="https://www.github.com/Sachinsubedi293">GitHub</a></li>
                  <li><a href="https://www.twitter.com">Twitter</a></li>
                  <li><a href="https://www.facebook.com">Facebook</a></li>
                </ol>
              </div>
            </aside>

          </div>
        </main>
      </div>
    </>

  );
}
export default Blog;