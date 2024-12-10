import React from 'react';
import AboutBlack from './assets/images/About_Black.webp';
import AboutWhite from './assets/images/About_White.webp';

function About({ isDarkMode }) {
  const backgroundImage = isDarkMode
    ? `url(${AboutBlack})` 
    : `url(${AboutWhite})`;

  return (
    <div>
      <div
        className="about"
        style={{
          backgroundImage: backgroundImage,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column', // Stack children vertically
          justifyContent: 'flex-end', // Position children at the bottom
        }}
      >
        {/* Background Section (with image) */}
      </div>
      
      {/* Text Section */}
      <div
        className="about-text"
        style={{
          background: isDarkMode ? 'black' : 'white', // Solid background colors for contrast
          padding: '20px', // Add padding for the text container
         
          borderRadius: '8px', // Optional: round the corners
          color: isDarkMode ? 'white' : 'black', // Text color based on mode
          textAlign: 'center', // Center text
          marginBottom: '20px', // Space between the text and the bottom of the screen
          fontSize: '18px', // Increase the base font size
        }}
      >
        <h1 style={{ fontSize: '2.5em' }}>About ME</h1> {/* Increase heading size */}
        <p style={{ fontSize: '1.2em' }}>👋 Hey there! I’m Hmmbert , your friendly neighborhood software programmer on a mission </p>
        <p style={{ fontSize: '1.2em' }}> to transform coffee into code and ideas into reality. With a curious mind and a passion for problem-solving, </p>
        <p style={{ fontSize: '1.2em' }}>   I dive headfirst into the ever-evolving world of technology.</p>
        <br></br>
        <p style={{ fontSize: '1.2em' }}>
🌟 My toolkit includes languages like [JavaScript, Python, etc.] and frameworks such as [React, Node.js, etc.]. </p>
<p style={{ fontSize: '1.2em' }}> I love weaving together sleek designs and robust functionalities to create applications </p>
<p style={{ fontSize: '1.2em' }}>  that not only work seamlessly but also bring a smile to users' faces. </p>
<p style={{ fontSize: '1.2em' }}> Every line of code I write is a brushstroke on the canvas of the digital world! </p>
<br></br>
<p style={{ fontSize: '1.2em' }}>
🔍 When I’m not coding, you might find me playing online games. I’m an avid learner 
who believes that the best ideas often come from collaboration, </p><p style={{ fontSize: '1.2em' }}>
 so I’m always up for a chat or a coding jam session.
 <br></br>
💡 Let’s embark on this exciting journey together! Whether you have a project in mind or just want to connect over the latest tech trends, I’d love to hear from you!</p>
      </div>
    </div>
  );
}

export default About;
