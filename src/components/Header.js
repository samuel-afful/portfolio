import React from 'react';
import Typed from 'react-typed'
import Particles from 'react-tsparticles';
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = () => {
  return (
  <div className="header-wrapper">
              <Particles
    id="tsparticles"
    options={{
      background: {
       
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 300,
            duration: 2,
            opacity: 0.8,
            size: 20,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffa500",
        },
        links: {
          color: "#ffa500",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }
  }
   

  />
      <div className="main-info">
  <h1>Web Development and Website Promotions</h1>
  <Typed
    className="typed-text"
    strings={['Web Design','Web Development','Backend-Developer','Machine Learning']}
    typeSpeed={30}
    backSpeed={60}
    loop
  />
  <AnchorLink href="#skills" className="btn-main-offer">See My Software Stacks</AnchorLink>
      </div>
  </div>
  );
}

export default Header;
