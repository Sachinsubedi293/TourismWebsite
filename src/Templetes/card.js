import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Productcard from './pages/card';

const Card = ()=>{
    return(
        <div>
            <Header/>
            <Productcard/>
            <Footer/>
        </div>
    )
}
export default Card;