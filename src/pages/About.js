import "../resources/css/About.css"
import headshot from '../resources/icons/headshot.PNG';
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

import AI from '../resources/icons/AI.png';
import basketball from "../resources/icons/basketball.png";
import compVision from "../resources/icons/compVision.png";
import fullStack from "../resources/icons/fullStack.png";
import gaming from "../resources/icons/gaming.png";
import gameDev from "../resources/icons/gameDev.png";
import music from "../resources/icons/music.png";
import raspberryPi from "../resources/icons/raspberryPi.png";
import trivia from "../resources/icons/trivia.png";

import { Textfit } from 'react-textfit';
import React, { useState } from "react";

//Skill descriptions
const cppDescription = "A powerful, high-perfomance language mostly used for object-oriented programming, system/software design, video games and complex applications.";
const javaDescription = "A versatile, object oriented programming language used for developing cross platform applications, including web, mobile and enterprise systems.";
const pythonDescription = "A high level, easy to learn, scripting language that is very versatile. Although simple, python has many libraries that help a developer create very powerful applications with ease.";
const cDescription = "A low level, procedural programming language, known for being efficent and it's use in system design.";
const ffmpegDescription = "FFmpeg (and its avcodec libraries) are a collection of libraries and tools used for encoding, decoding and altering video, audio and other multimedia files.";
const boostDescription = "The Boost C++ Libraries are a large collection of libraries that extend the standard C++ libraries. Boost has libraries for socket programming, data structures, math and more.  ";
const linuxDescription = "An open-source Unix-like operating system that is developer friendly. It's command line interpreter 'Bash' is a powerful scripting language that puts lots of power in the developer's hands.";
const svnDescription = "SVN is a version control system used to manage files and directories for software developers. ";
const qtDescription = "A cross-platform, open-source framework used for developing graphical user interfaces and applications. ";
const reactDescription = "A Javascript library developed by Meta for building fast user interfaces. React is mainly used to create webpages and single page applications using JSX which helps developers write HTML-like webpages.";

// Bullet Point lists for skills 
const cppBullet = ["Experience writing effective C++ code using good O.O.P. principles in an organized manner", 
                   "Used libraries and frameworks such as: Boost, OpenCV, Qt, OpenGl, AvCodec and GTK",  
                   "Developed applications in C++ with practical applications while working at IO Industries"];
const javaBullet = ["Comfortable developing and building Java applications", 
                    "Used Java to build a mapping system of Western University application that incorporated Java libraries such as JSON, Java Swing and JUnit", 
                    "Developed custom data structures for a Data Structures and Algorithmns course", 
                    "Caluclated time complexity and optimized programs in Java for an Analysis of Algorithmns course"];
const pythonBullet = ["Used Python for writing scripts to automate tasks / maintain code", 
                      "Built multiple applications using the socket library to create chatrooms and client/server based games over TCP and UDP connection protocols for a Computer Networks course",
                      "Libraries I'm experienced in include: 'OS', 'sys', 'Numpy', 'Pygame', 'threading', 'rsa' (encryption) and 'socket'", 
                      "Used OpenGl to build graphical applications and games"];
const cBullet = ["Comfortable writing and debugging code written in C", 
                 "Developed low-level C programs using system functions for an Operating Systems course"];
const ffmpegBullet = ["Used the Avcodec libraries to build an applicaton for creating MP4 video from image files.", 
                      "Experience using the FFmpeg.exe tool for manipulating different video/photo formats including DNG, PNG, JPG and TIFF"];
const boostBullet = ["Experience using Boost libraries in C++ development process in work and school", 
                     "Most familiar with filesystem, Asio and Python (used for wrapping libraries) libraries",
                     "Used Boost.Build and Jam to build cross-platform applications"];
const linuxBullet = ["Comfortable and experienced when developing applications in Linux", 
                     "Ability to use Bash to write effective and useful scripts for automating tasks", 
                     "Experience building applications and installers for practical Linux software."];
const svnBullet = ["Used SVN to manage version control while working at IO Industries", 
                   "Also familar with Git and it's command line tools", 
                   "Used SVN/Git to manage and organize muliple projects and repositories"];
const qtBullet = ["Familar with developing Qt applications in Linux and Windows", 
                  "Used Qt to design the GUI of a SmartHome project for an O.O.P. course", 
                  "Developed GUIs with Qt while working at IO Industries",
                  "Compiled/built Qt libraries from source" ];
const reactBullet = ["Used React/JSX to build a redesigned and user-experience oriented Github for a Human-Computer interation course", 
                     "React was used to build this portfolio website!"];

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

                   <a href="/resources/resume.pdf" download="LiamT-Resume.pdf"  >
                      Click here for a PDF of my resume
                   </a>

               </div>

               <div className="picture">
                  <img src={headshot} alt="Faded" />
               </div>

               <div className="brief">
                  <h2 className="aboutH2">// About Me</h2>
            </div>

               <div className="underPic">
                    
                    <Textfit mode="single" forceSingleModeWidth={false}>
                       <p>London, ON | Cambridge, ON</p>
                    </Textfit>

                    <div className="linkButtons">    
                        <a href="https://github.com/THEBIGLT6" target="_blank" rel="noopener noreferrer">
                            <button className="linkButt"> 
                                <img src={GitHub} alt="Icon" className="icon-image" />
                            </button>
                        </a>

                        <a href="https://www.linkedin.com/in/liam-truss-a42a65142" target="_blank" rel="noopener noreferrer">
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
                  
                  <SkillButton img={Cpp} title="C++" bulletList={cppBullet} description={cppDescription} />
                  <SkillButton img={Java} title="Java" bulletList={javaBullet} description={javaDescription}/>
                  <SkillButton img={Python} title="Python" bulletList={pythonBullet} description={pythonDescription}/>
                  <SkillButton img={Qt} title="Qt" bulletList={qtBullet} description={qtDescription}/>
                  <SkillButton img={Boost} title="Boost Libraries" bulletList={boostBullet} description={boostDescription}/>
                  <SkillButton img={C} title="C" bulletList={cBullet} description={cDescription}/>
                  <SkillButton img={FFmpeg} title="FFmpeg" bulletList={ffmpegBullet} description={ffmpegDescription}/>
                  <SkillButton img={Linux} title="Linux" bulletList={linuxBullet} description={linuxDescription}/>
                  <SkillButton img={ReactPic} title="React" bulletList={reactBullet} description={reactDescription}/>
                  <SkillButton img={Svn} title="Svn/Git" bulletList={svnBullet} description={svnDescription}/>

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
                        <InterestLabel label="Raspberry Pi Projects" img={raspberryPi}/>
                        <InterestLabel label="Computer Vision" img={compVision}/>
                        <InterestLabel label="Game Development" img={gameDev}/>
                        <InterestLabel label="Full Stack Development" img={fullStack}/>
                        <InterestLabel label="Basketball" img={basketball}/>
                        <InterestLabel label="Music" img={music}/>
                        <InterestLabel label="Trivia" img={trivia}/>
                    </div>



               </div>

               <div className="experience">
                   <h2 className="aboutH2">// Education</h2>

                   <h3 className="aboutH3">
                   <u>Western University - BSc. Honours Specialization in Computer Science</u> <br />
                   &nbsp;&nbsp;&nbsp;&nbsp; September 2021 to April 2026
                   </h3>
                   <ul className="bulletPoints">
                      <li>2022-2023 & 2023-2024 Dean's Honour List</li>
                      <li>Science Internship program - 16 month work term</li>
                      <li>Minor in game development</li>
                      <li>Classes taken include: Data Structures and Algorithmns, Computer Networks, Operating Systems, Object Oriented Design, AI, Computer Graphics, Computer Architecture and more.  </li>
                    </ul>

                   <h2 className="aboutH2">// Work Experience</h2>
                   
                   <h3 className="aboutH3">
                   <u>IO Industries - Intern Software Developer</u> <br />
                   &nbsp;&nbsp;&nbsp;&nbsp; May 2024 to August 2025
                   </h3>
                   <ul className="bulletPoints">
                      <li>Completed a 16-month internship program in collaboration with Western University</li>
                    </ul>

                   <h3 className="aboutH3">
                   <u>Westrock Packaging - Production Intern</u> <br />
                   &nbsp;&nbsp;&nbsp;&nbsp; May 2023 to August 2024
                   </h3>
                   <ul className="bulletPoints">
                      <li>Packaging and producing high levels of cardboard and paper products</li>
                      <li>Preparing machine for incoming orders and altering mechanisms as necessary</li>
                      <li>Quality assurance for all product being produced</li>
                      <li>Factory safety and WHMIS training</li>
                    </ul>

                   <h3 className="aboutH3">
                   <u>African Lion Safari (KoHo Food Service) - Shift Supervisor</u> <br />
                   &nbsp;&nbsp;&nbsp;&nbsp; April 2023 to September 2023
                   </h3>
                   <ul className="bulletPoints">
                      <li>Supervising approximately 50 employees in a day, ensuring employees are completing responsibilities and working well with one another </li>
                      <li>Ensuring all employees are trained and using kitchen equipment according to health and safety procedures</li>
                      <li>Taking daily and weekly inventory counts along with keeping track of deliveries received</li>
                      <li>Checking all opening and closing procedures are followed at each restaurant location</li>
                      <li>Closing the restaurant for the night, ensuring all doors are locked and equipment off</li>
                      <li>Handing out and keeping track of all cash boxes for the day</li>
                      <li>Managing and responding to customer complaints</li>
                    </ul>

                   
               
               </div>


           </div>
        
        </div>

    ); //end return 

}//end About