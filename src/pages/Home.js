import "../resources/css/Home.css"
import GitHub from "../resources/icons/GitHub.png";
import LinkedIn from "../resources/icons/LinkedIn.png";
import Email from "../resources/icons/Email.png";
import BodyPic from "../resources/Pictures/fullbody.png";

import React, { useEffect } from 'react';

export default function Home(){

  
  useEffect(() => 
    {
      const waveEmoji = document.querySelector('.waveEmoji');
    
      const handleMouseEnter = () => 
      {
        waveEmoji.style.animationName = 'none';
        void waveEmoji.offsetWidth; 
        waveEmoji.style.animationName = 'wave-animation'; 
      };
    
      waveEmoji.addEventListener('mouseenter', handleMouseEnter);

      //clean up
      return () => 
      {
        waveEmoji.removeEventListener('mouseenter', handleMouseEnter);
      };
    }, 
    []); // end useEffect


    const email = "ltruss2003@gmail.com";
    return (
      
        <div className="homePage">

          <div className="ContactComp">

          <a href="https://github.com/THEBIGLT6" target="_blank" rel="noopener noreferrer">
            <button className="GitHubButt"> 
              <img src={GitHub} alt="Icon" className="icon-image" />
            </button>
          </a>

          <a href="https://www.linkedin.com/in/liam-truss" target="_blank" rel="noopener noreferrer">
            <button className="LinkedInButt">
              <img src={LinkedIn} alt="Icon" className="icon-image" />
            </button>
          </a>

          <a href={`mailto:${email}`}>
            <button className="EmailButt">
              <img src={Email} alt="Icon" className="icon-image" />
            </button>
          </a>
          
          </div>{/*ContactComp */}

          <div className="InfoComp">
            
            <div className="TextContainer">

              <h3 className="homeH3">Hi, I'm </h3>
              <span className="waveEmoji"> 👋🏻 </span>
              <h1 className="homeH1">Liam Truss</h1>
              <h2 className="homeH2">Computer Science Student at Western University</h2>
              <h6 className="homeH6">
                I am a skilled student software developer currently pursing an honours specialization in computer science 
                with a minor in game development at Western. I have a passion for problem solving and enjoy a good challenge.
                I am well diversed with experience in many languages and libraries: C/C++/C#, Qt, Boost, Python, Unity, Java and JavaScript 
                to name a few. Feel free to checkout any of the projects I have contributed to on the projects page!  

              </h6>

            </div>

          </div>{/*InfoComp */}

          <div className="PictureComp">

            <div className="PicContainer">
              <img src={BodyPic} alt="Pic of Liam" className="bodyPic" />
            </div>

          </div>{/*PictureComp */}
        
        </div> // homePage
      
    ); //end return  
} //end Home()