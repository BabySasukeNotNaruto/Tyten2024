// Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>Hello! I'm Tyten Vance, a passionate developer who currently working as a Systems Engineer II at Fiserv as a UST Contractor.</p>
      </motion.div>
    </section>
  );
}

export default Home;
