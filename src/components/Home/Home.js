import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './Home.css';

const Home = () => {
   return (
      <div id='home'>
         <Navigation></Navigation>
         <Banner></Banner>
         <About></About>
         <Footer></Footer>
      </div>
   );
};

export default Home;