import React, { useState, useEffect } from "react";
import "../resources/css/About.css"

import headshot from '../resources/Pictures/headshot.png';
import GitHub from "../resources/icons/GitHub.png";
import LinkedIn from "../resources/icons/LinkedIn.png";
import Email from "../resources/icons/Email.png";
import Cpp from "../resources/icons/cpp.png";
import Python from "../resources/icons/python.png";
import Java from "../resources/icons/java.png";
import Qt from "../resources/icons/qt.svg";
import Boost from "../resources/icons/Boost.png";
import C from "../resources/icons/c.png";
import FFmpeg from "../resources/icons/FFmpeg.png";
import Linux from "../resources/icons/linux.png";
import ReactPic from "../resources/icons/react.png";
import Svn from  "../resources/icons/svn.png"
import Unity from "../resources/icons/unity.png";
import Cuda from "../resources/icons/cuda.png";

import AI from '../resources/icons/AI.png';
import basketball from "../resources/icons/basketball.png";
import compVision from "../resources/icons/compVision.png";
import fullStack from "../resources/icons/fullStack.png";
import gaming from "../resources/icons/gaming.png";
import gameDev from "../resources/icons/gameDev.png";
import music from "../resources/icons/music.png";
import trivia from "../resources/icons/trivia.png";

const imageTags = {
    "C++": Cpp,
    "Python": Python,
    "Java": Java,
    "Qt": Qt,
    "Boost": Boost,
    "C": C,
    "FFmpeg": FFmpeg,
    "Linux": Linux,
    "React": ReactPic,
    "SVN/Git": Svn,
    "Unity": Unity,
    "NVIDIA Cuda": Cuda
};

// Popup dialog on SkillButton being clicked
function Popup({ title, description, bulletList, onClose }) {
    return (
        <div className="popupOverlay">
            <div className="popupContent">
                <h2 className="popupTitle">{title}</h2> 
                <p className="popup-description">
                    <strong>Description:</strong> {description}
                </p> 
                <ul className="popup-list">
                    {bulletList.map((item, index) => (
                        <li key={index}>{item}</li> 
                    ))}
                </ul>
                <button className="closeBtn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

// Function for a technical skill button 
function SkillButton({img, description, bulletList, title}){
    
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true); 
    };

    const closePopup = () => {
        setShowPopup(false); 
    };
    
    return(
        <div className="skillButtDiv">
            <button className="skillButt" onClick={handleClick}> 
                <img src={img} alt="Icon" className="icon-image" />
            </button>
            {showPopup && <Popup title={title} description={description} bulletList={bulletList} onClose={closePopup} />}
        </div>
    );
}

function CreateSkillButtons(){
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/skills/skill-buttons-info.json`)
        .then(res => res.json())
        .then(setSkills)
        .catch((error) => console.error("Error loading skill buttons JSON data:", error));
    }, []);

    return skills.map( skill => ( <SkillButton key={skill.skill} img={imageTags[skill.skill]} title={skill.skill} bulletList={skill.bullets} description={skill.description}/>  ) );
}

function SoftSkillLabel( { skill, percentage } ){

    return (
        <div className="skill-container">
          <span className="skill-name">{skill}</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      );
    
}

function InterestLabel({ label, img }) {
    return (
      <div className="interestContainer">
        <img src={img} alt="icon" className="interestImage" />
        <span className="interestText">{label}</span>
      </div>
    );
  }

export default function About(){

    return( 
        
        <div className="aboutContainer">

           <div className="centeredContainer">
               
               <div className="resumeLink">

                   <a href={`${process.env.PUBLIC_URL}/resources/resume.pdf`} download="LiamT-Resume.pdf"  >
                      Click here for a PDF of my resume
                   </a>

               </div>

               <div className="picture">
                  <img src={headshot} alt="Faded" />
               </div>

               <div className="underPic">

                    <p>London, ON | Cambridge, ON</p>
                    
                    <div className="linkButtons">    
                        <a href="https://github.com/THEBIGLT6" target="_blank" rel="noopener noreferrer">
                            <button className="linkButt"> 
                                <img src={GitHub} alt="Icon" className="icon-image" />
                            </button>
                        </a>

                        <a href="www.linkedin.com/in/liam-truss" target="_blank" rel="noopener noreferrer">
                            <button className="linkButt">
                                <img src={LinkedIn} alt="Icon" className="icon-image" />
                            </button>
                        </a>

                        <a href={`mailto:ltruss2003@gmail.com`}>
                            <button className="linkButt">
                                <img src={Email} alt="Icon" className="icon-image" />
                            </button>
                        </a>
                    </div>

               </div>

               <div className="skills">
                  
                  <h2 className="aboutH2">// Technical Skills</h2>
                  
                  <CreateSkillButtons />

                  <h2 className="aboutH2">// Soft Skills</h2>
                  <SoftSkillLabel skill={"Problem Solving"} percentage={100}/>
                  <SoftSkillLabel skill={"Initiative"} percentage={100}/>
                  <SoftSkillLabel skill={"Reliable"} percentage={100}/>
                  <SoftSkillLabel skill={"Continuous Learner"} percentage={98}/>
                  <SoftSkillLabel skill={"Leadership"} percentage={96}/>
                  <SoftSkillLabel skill={"Goal-Oriented"} percentage={95}/>
                  <SoftSkillLabel skill={"Organization"} percentage={92}/>
                  <SoftSkillLabel skill={"Communication / Customer Service"} percentage={85}/>

                  <h2 className="aboutH2">// Interests & Hobbies</h2>
                    <div className="interestsWrapper">
                        <InterestLabel label="Gaming" img={gaming}/>
                        <InterestLabel label="Artifical Intelligence" img={AI}/>
                        <InterestLabel label="Computer Vision" img={compVision}/>
                        <InterestLabel label="Game Development" img={gameDev}/>
                        <InterestLabel label="Full Stack Development" img={fullStack}/>
                        <InterestLabel label="Basketball" img={basketball}/>
                        <InterestLabel label="Music" img={music}/>
                        <InterestLabel label="Trivia" img={trivia}/>
                    </div>
               </div>

               <div className="experience">

                   <h2 className="aboutH2">// About Me</h2>

                    <p className="aboutDescription">
                        I’m currently finishing my final semester of Computer Science at Western and will be seeking full-time opportunities starting Spring 2026. I’ve been interested in software development since high school, drawn to the problem-solving and creativity that come with building reliable, well-designed systems.
                    </p>

                    <p className="aboutDescription">
                    I’ve always been a gamer, which led me to pursue a minor in Game Development. Through this, I’ve gained hands-on experience with the full game development process and had the opportunity to work on several of my own projects. Alongside this, my internship experience at camera manufacturer IOI helped me discover an interest in low-level programming and working close to hardware.
                    </p>
                    
                    <p className="aboutDescription">
                        Outside of tech, I enjoy playing and watching basketball (go Celtics!) and football (go Patriots!), and spending time with a guitar, playing along to bands like Oasis, Radiohead, and Nirvana. Feel free to check out my work or use the links to the left to connect!
                    </p>

                   <h2 className="aboutH2">// Education</h2>

                   <h3 className="aboutH3">
                   <u>Western University - BSc. Honours Specialization in Computer Science</u> <br />
                   &nbsp;&nbsp;&nbsp;&nbsp; September 2021 to April 2026
                   </h3>
                   <ul className="bulletPoints">
                      <li>2022-2023 & 2023-2024 Dean's Honour List</li>
                      <li>Science Internship program - 16 month work term</li>
                      <li>Minor in game development</li>
                      <li>Relevant courses: Computer Networks, Game Programming and Design, System Programming, Object-Oriented Design and Analysis, Internet Algorithmics, Machine Learning / AI and more.  </li>
                    </ul>

                   <h2 className="aboutH2">// Work Experience</h2>
                   
                   <h3 className="aboutH3">
                   <u>IO Industries - Intern Software Developer</u> <br />
                   &nbsp;&nbsp;&nbsp;&nbsp; May 2024 to August 2025
                   </h3>
                   <ul className="bulletPoints">
                        <li>Completed a 16 month work term as part of the Western Science Internship Program</li>
                        <li>Designed and developed cross-platform desktop applications (Windows/Linux) in C++ to interface with high-speed video recording hardware</li>
                        <li>Developed independent projects, including a custom transcoding library for converting sequences of raw image data to MP4 video and a lightweight RTSP video viewer</li>
                        <li>Leveraged industry-standard libraries including Qt, Boost, Intel IPP, OpenCV, and FFmpeg to implement performant solutions</li>
                        <li>Debugged and optimized code to maintain high standards of quality, efficiency, and adherence to company coding guidelines</li>
                        <li>Reproduced and resolved customer-reported issues, ensuring timely bug fixes and reliable software performance</li>
                    </ul>

                   <h3 className="aboutH3">
                   <u>Westrock Packaging - Production Intern</u> <br />
                   &nbsp;&nbsp;&nbsp;&nbsp; May 2023 to August 2024
                   </h3>
                   <ul className="bulletPoints">
                      <li>Packaged high levels of cardboard and paper products</li>     
                      <li>Prepared machinery for incoming orders and altering mechanisms as necessary</li>
                      <li>Performed quality checks to ensure all finished products met company and customer standards</li>
                      <li>Completed factory safety and WHMIS training, maintaining a safe work environment</li>
                    </ul>

                   <h3 className="aboutH3">
                   <u>African Lion Safari (KoHo Food Service) - Shift Supervisor</u> <br />
                   &nbsp;&nbsp;&nbsp;&nbsp; April 2022 to September 2022 (Sesonal)
                   </h3>
                   <ul className="bulletPoints">
                        <li>Promoted to Supervisor after progressing from Team Member to Crew Chief over several years, demonstrating strong performance, leadership, and reliability</li>
                        <li>Supervising approximately 50 employees in a day, ensuring employees are completing responsibilities and working well with one another</li>
                        <li>Ensuring all employees are trained and using kitchen equipment according to health and safety procedures</li>
                        <li>Taking daily/ weekly inventory counts along with keeping track of deliveries received</li>
                        <li>Checking all opening and closing procedures are followed at each restaurant location</li>
                        <li>Closing the restaurant for the night, ensuring all doors are locked and equipment off</li>
                        <li>Handing out and keeping track of all cash boxes for the day</li>
                        <li>Managing and responding to customer complaints</li>
                        <li>Led and coordinated team members in a fast-paced kitchen environment to efficiently prepare and complete customer orders</li>
                        <li>Obtained City of Hamilton Food Safety and Ontario Smart Serve certificates</li>
                    </ul>

               </div>

           </div>
        
        </div>

    ); //end return 

}//end About