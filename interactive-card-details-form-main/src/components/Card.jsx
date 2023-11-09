import React from 'react';
import FrontCard from '../initial/images/bg-card-front.png'; // Path to the front card image
import BackCard from '../initial/images/bg-card-back.png'; // Path to the back card image

function Card() {
 

  const frontCardStyle = {
    top: '20%',
    right: '60%',
    width : '26%',
    position : 'absolute',
  };

  const backCardStyle = {
    top: '55%',
    right  : '55%',
    width : '26%',
    position : 'absolute',

    };

  return (
    <div className="flex h-screen w-screen justify-center items-start absolute top-0 left-0">
        <img src={FrontCard} alt="Front Card" className="w-full" style={frontCardStyle} />
        <img src={BackCard} alt="Back Card" className="w-full" style ={backCardStyle} />
    </div>
  );
}

export default Card;
