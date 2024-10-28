import React from 'react';
import '../styling/About.css'; // Import CSS file for About page

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side: Image */}
        <div className="about-image">
          <img src="https://img.freepik.com/premium-psd/delightful-3d-cartoon-character-smiling-businesswoman-isolated-transparent-background_810462-613.jpg" alt="About Me" />
        </div>

        {/* Right Side: Text Boxes */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <div className="about-roles">
            {/* Web Developer */}
            <div className="about-role">
              <h3 className="role-title">Web Developer</h3>
              <p className="role-description">
                I’m a Web Developer with expertise in creating responsive and efficient web applications. I focus on delivering seamless user experiences through clean and scalable code.
              </p>
            </div>
            {/* Graphic Designer */}
            <div className="about-role">
              <h3 className="role-title">Graphic Designer</h3>
              <p className="role-description">
                I’m a Graphic Designer focused on creating stunning visuals that elevate brands. I bring ideas to life through creative design.
              </p>
            </div>
            {/* UI Designer */}
            <div className="about-role">
              <h3 className="role-title">UI Designer</h3>
              <p className="role-description">
                I have designed multiple landing pages and have created design systems as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

