import React from 'react';
import backgroundImage from '../initial/images/bg-main-desktop.png'; // Replace this with the correct image path

function Background() {
  return (
    <div className="flex">
      <div
        className="h-screen w-1/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="h-screen w-1/2 bg-white"></div>
    </div>
  );
}

export default Background;
 