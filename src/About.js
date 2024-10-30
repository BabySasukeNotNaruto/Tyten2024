// About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <section className="about">
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <div className="profile-pic-container">
          <img 
            src="icon.jpg" 
            alt="My Photo"
            className="profile-pic"
          />
        </div>
        <h2>About Tyten Vance</h2>
            <p>I recieved my Bachelor's Degree at Wayne State College with a major in Programming / Data Analyst and a minor in Computer Science.</p>
            <br />
            <p>Currently, I am employed at Fiserv as a UST Contractor, training as part of the UST Step IT Up Program. As I train with Fiserv and UST, I am learning skills and tools as a Systems Engineer II on the mainframe.</p>
            <br />
            <p>Some of the skills I have learned so far include: COBOL, JCL, REXX, z/OS, Python, and many more.</p>
            <br />
        <h2>Other skills outside of my role as a Systems Engineer II.</h2>
            <p>I am into building Web Applications, such as this one. I use Visual Studio Code and GitHub to manage my projects and code.</p>
            <br></br>
            <p>Some programming languages I use often for personal projects are: C++, JavaScript, TypeScript, Python, Node.js, HTML, and CSS.</p>
        <h2>More Information</h2>
            <p>Some of my hobbies inlcude learning more about JavaScript and React to make Web Applications look clean and professional. I learn the most through watching YouTube videos and then applying what I saw and learned into a template project that I have made. </p>
            <br></br>
            <p>My LinkedIn and GitHub accounts will be linked at the bottom of this page (click on icon to visit).</p>
      </motion.div>
    </section>
  );
}

export default About;
