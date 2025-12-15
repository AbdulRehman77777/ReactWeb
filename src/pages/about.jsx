import React from 'react';

const About = () => (
  <div className="card">
    <h3>React App</h3>
    <h2>About</h2>
    <p style={{fontSize: '12px', color: '#666', lineHeight: '1.6'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Morbi ergesget sagittis nonu.
    </p>
  </div>
);

// This line is crucial! It fixes the error.
export default About;