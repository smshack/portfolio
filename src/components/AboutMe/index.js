import React from 'react';
import { TypingStep } from "typing-effect-reactjs";
const AboutMe = ({ height }) => {
    return (
        <div className='aboutme' style={{ height: height }}>
            <div className='title'>
            <h1>
                About Me
            </h1>
            </div>
            <div className='content'>
                <div className="section">

                </div>
                <div className="section">
                    <img src="" alt="내사진" />
                </div>
            </div>

        </div>
    );
};

export default AboutMe;