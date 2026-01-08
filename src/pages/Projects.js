import React, { useState, useEffect } from "react";
import "../resources/css/Projects.css"

import Boost from "../resources/icons/Boost.png";
import C from "../resources/icons/c.png";
import Cpp from "../resources/icons/cpp.png";
import Html from "../resources/icons/html.png";
import Java from "../resources/icons/java.png";
import JavaScript from "../resources/icons/javascript.png";
import OpenGL from "../resources/icons/opengl.png";
import Python from "../resources/icons/python.png";
import Qt from "../resources/icons/qt.svg";
import ReactImg from "../resources/icons/react.png";
import CSharp from "../resources/icons/csharp.png";
import Unity from "../resources/icons/unity.png";

// Project Tags
const tagImages = {
    "Boost": Boost,
    "C": C,
    "C++": Cpp,
    "HTML": Html,
    "Java": Java,
    "JavaScript": JavaScript,
    "OpenGL": OpenGL,
    "Python": Python,
    "Qt": Qt,
    "React": ReactImg,
    "Unity": Unity,
    "C#": CSharp,
};

// Function to format YYYY-MM to a string
function formatYearMonth(yearMonth) 
{
  if (!yearMonth) return "";

  const [year, month] = yearMonth.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

// Component for Project card
function CardGrid() {

  const [cardData, setCardData] = useState([]);

  // Read project info from the JSON file 
  useEffect(() => {
      // Load JSON data dynamically
      fetch(`${process.env.PUBLIC_URL}/projects/project-info.json`)
          .then((response) => response.json())
          .then((data) => setCardData(data))
          .catch((error) => console.error("Error loading project JSON data:", error));
  }, []);

    const [popup, setPopup] = useState({ show: false, title: "", tags: [], description: "", useLink: false, link: "", sourceCode: "", video: "", date: "" });
  
    const handleCardClick = (card) => {
      setPopup({ show: true, title: card.title, tags: card.tags, description: card.description, useLink: card.useLink, link: card.link, sourceCode: card.sourceCode, video: card.video, date: card.date });
    };
  
    const handleClosePopup = () => {
      setPopup({ show: false, title: "", tags: [], description:"", useLink: false, link: "", sourceCode: "", video: "", date: ""});
    };
  
  
    return (
      <div className="cardGrid">
        {cardData.map((card, index) => (
          <div className="card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + card.image})` }} key={index} onClick={() => handleCardClick(card)}>

            <div className="cardContainer">
                <div className="cardTitle">{card.title}</div>
                <div className="tag-images">
                    {card.tags.map((tag, i) => (
                        <img key={i} src={tagImages[tag]} alt={tag} className="tag-icon" title={tag}/> 
                    ))}
                </div>
                <div className="cardDescription">
                  {card.brief}
                </div>
            </div>
          </div>
        ))}
        {popup.show && <ProjectPopup title={popup.title} tags={popup.tags} description={popup.description} video={popup.video} useLink={popup.useLink} link={popup.link} sourceCode={popup.sourceCode} date={popup.date} onClose={handleClosePopup} />}
      </div>
    );
  }


// Component for Project popup on click of card
function ProjectPopup({ title, tags, video, description, useLink, link, sourceCode, date, onClose }) 
{

  let videoElement;
  if ( video && title !== "LiamTrussDotCom" ) 
  { 
    
    videoElement= (
        <div className="videoContainer">
            <video controls>
                <source src={`${process.env.PUBLIC_URL}${video}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );

  }

  else 
  {

    videoElement = (
      <div className="videoContainer">
        <h3> There is no demo available for this project, take a look around the site ! </h3>
      </div>
    );

  }

  let sourceCodeElement;
  if ( useLink )
  {
    sourceCodeElement =(
      <div className="downloadSection">
        <a href={link} target="_blank" rel="noopener noreferrer" className="download-link"> Visit GitHub Repo</a>
      </div>
    );
  }
  else
  {
    sourceCodeElement =(
      <div className="downloadSection">
        <a href={`${process.env.PUBLIC_URL + sourceCode}`} download className="download-link">Download Source Code</a>
      </div>
    );
  }


  return (
    <div className="popupOverlay">
        <div className="popupContent">
            <h2 className="popupTitle">{title}</h2>

            {videoElement}

            {sourceCodeElement}

            <div className="tag-images">
                {tags.map((tag, i) => (
                    <img key={i} src={tagImages[tag]} alt={tag} className="tag-icon" title={tag}/>
                ))}
            </div>

            {date && (
              <div className="projectDescription">
                <strong>Date: </strong> {formatYearMonth(date)}
              </div>
            )}

            {description && (
                <div className="projectDescription">
                    <strong>Description: </strong>{description}
                </div>
            )}

            <button className="closeBtn" onClick={onClose}>Close</button>
        </div>
    </div>
  );
}


// Main
export default function Projects(){

    return( 
        
        <div className="pageContainer">
            <h1 className="projectHeader">// Projects</h1>
            
            <div className="projectPreface">
                The following is a collection of projects / assignments I have worked on over the years. Click on a project to read more about it. 
            </div>
            
            <div className="projectsContainer">
                <CardGrid />
            </div>
        </div>

    
    ); //end return

} // end Projects