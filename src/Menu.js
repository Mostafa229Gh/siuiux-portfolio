import React, { useEffect } from 'react';
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4';

const Menu = () => {
  useEffect(() => {
    const firstSvg = document.querySelector('.menu4-animation svg:nth-of-type(1)');
    if (firstSvg) {
      firstSvg.style.display = 'none'; // Hide the first SVG
    }
  }, []); // Runs after the component mounts

  return (
    <div className="menu4-animation">
      <UseAnimations animation={menu4} size={42} />
      <style>
        {`
          .menu4-animation{
            display: none;
          }
          @media (max-width: 640px) {
            .menu4-animation{
              display: inline;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
