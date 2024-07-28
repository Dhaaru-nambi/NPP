import React, { useEffect } from 'react';
import '../forms/Loadingscreen.css';
import Logo from '../forms/Logo'; 

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 500); // Change this to the desired loading time

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="logo-container">
        <Logo className="rotating-logo" />
        <h1 className="portaflex-text">PORTAFLEX</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
