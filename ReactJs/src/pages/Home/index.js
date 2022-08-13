import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Whythis from '../../components/Whythis';


const Home = props => {
    return (
        <div>
             <Header/>
            <Banner/>
            <Whythis/>
            <Product/>


        </div>
    );
};


export default Home;