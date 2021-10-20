import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Body from './pages/body';



const Home = ()=>{
 
    return(
        <div data-aos="fade-in" data-aos-durection="100ms">
            
          
      
            <Header />
            <Body />

            <Footer />
        </div>
    )
}
export default Home;