// Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { title: 'Community Calendar Web Application', description: 'This is an application that can be used for a small community to plan and schedule events on a calendar. This Web App has security features and sign in capabilities.' },
  { title: 'Sporting Goods Website with an E-Commerce Plan', description: 'This was a project in my Senior year of College, Myself and 3 others worked on this websie, I designed a lot of the website, including making the logo, overall website layout, and CSS.' },
  { title: 'Teacher and Student grade database in SQL', description: 'This project was for my Advanced Database class and this is just a simple database that assigns students to a teacher depending on their classes and assigns them a letter grade based on their number grade.' },
  { title: 'Many Scripts and Programs written in Python and C++', description: 'Some of these projects are search algorithms and others are Python web scraping projects. Others are just C++ programs that are different types of games.' },
  { title: 'Banking Program in COBOL', description: 'Using COBOL, I wrote a program that outputs the bank users name and allowed for deposit and withdrawals. This is also came with the ability to output the bank statement. ' },
  { title: 'Banking Program in Python', description: 'I upgraded from COBOL to Python with this program. I made more features using Python. I added account passwords, transaction history, and setting up new accounts and login capabilites to the banking program. The program writes to a file that keeps all of the banking accounts information to ensure the program was always getting the latest data for each account.' },
];

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
