import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './Home.css';

const Home = () => {
   return (
      <div id='home'>
         <Navigation></Navigation>
         <Banner></Banner>
         <About></About>
         <Faq></Faq>
         <Footer></Footer>
      </div>
   );
};

export default Home;