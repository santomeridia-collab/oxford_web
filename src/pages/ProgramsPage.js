import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Programs from '../components/Programs/Programs';
import Footer from '../components/Footer/Footer';
import './ProgramsPage.css';

const ProgramsPage = () => {
  return (
    <div className="programs-page">
      <Navbar />
      <Programs />
      <Footer />
    </div>
  );
};

export default ProgramsPage;