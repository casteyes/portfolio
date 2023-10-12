import React from 'react';
import about from '../img/MeOne.jpg';


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Daniel Collins</span></h4>
                <p className="about-text">
                    Hello, I’m a full stack web developer and designer living in Jacksonville, Florida, United States. 
                I spend my days with my hands in many different areas of web development, from back end 
                programming (.NET, C#, Java, Node.js) to database mangement(SQL, MySQL, Microsoft Azure) to front end engineering (HTML5, SCSS ,CSS3, jQuery/Javascript, React).  
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>University</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>City</p>
                        <p>State</p>
                    </div>
                    <div className="right-section">
                        <p>: Daniel Collins</p>
                        <p>: UNF</p>
                        <p>: American</p>
                        <p>: English</p>
                        <p>: Jacksonville</p>
                        <p>: Florida</p>
                    </div>
                </div>
                <a href="https://www.slideshare.net/DanielCollins101/computing-is-resume-final-version-4"><button className="btn">Resume</button></a>
            </div>
        </div>
    )
}

export default ImageSection
