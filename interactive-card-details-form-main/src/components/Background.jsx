import React from 'react';
import backgroundImage from '../initial/images/bg-main-desktop.png'; // Replace this with the correct image path
import Card from './Card'; // Import the Card component

function Background() {
  return (
    <div className="flex">
      <div className="h-screen w-1/3 bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Render the Card component within the Background component */}
        <Card />
      </div>
      <div className="h-screen w-2/3 bg-white"></div>
    </div>
  );
}

export default Background;
