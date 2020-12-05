import React from 'react';

const AboutMe = (props) => {
    return (
        <div className="card flex-wrap about-me">
            <h4 className="card-title">About Me</h4>
            <p className="card-text">{props.aboutMe}</p>
        </div>
    )
}

export default AboutMe;