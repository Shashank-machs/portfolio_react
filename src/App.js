import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, FileText, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Portfolio.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio light"}>
      <div className="container">
        {/* Dark Mode Toggle */}
        <div className="toggle">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />} {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Hero Section */}
        <motion.section className="hero" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1>Shashank M</h1>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "Java | Web | AIML Basics", "Passionate about Projects"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section className="section1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2>Education</h2>
          <ul className="education-list">
            <li><strong>B.Tech/B.E. in Computer Science</strong><br />Acharya Institute of Technology, Bangalore (2025) – 8.5 CGPA</li>
            <li><strong>Class XII in PCMB</strong> <br /> Vyshnavi Chetana PU College, Davanagere (2021) – 95%</li>
            <li><strong>Class X</strong><br /> SSJVP Govt High School, Santhebennur (2019) – 96.4%</li>
            
          </ul>
        </motion.section>

        {/* About Me */}
        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2>About Me</h2>
          <p>
            I am a versatile developer experienced in creating innovative projects like a Typing Speed Tester and Hospital Management System. Proficient in Core & Advance Java, SQL, HTML, CSS, JavaScript, React.js,Bootstrap and AI&ML. Passionate about building user-friendly applications and expanding my technical skills.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2>Skills</h2>
          <div className="cards">
            {["Java (Core & Advanced)", "SQL","Python (Basics)","AI & ML", "HTML & CSS", "JavaScript", "React.js", "Bootstrap",  "Data Structures", "JDBC, JSP, Spring", "API Development", "Git & GitHub"].map(skill => (
              <div className="card" key={skill}>{skill}</div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2>Projects</h2>
          <div className="cards">
            <div className="card">
              <h3>Typing Speed Tester</h3>
              <p>Web app built with HTML, CSS, and JavaScript to measure typing speed and accuracy with real-time feedback.</p>
            </div>
            <div className="card">
              <h3>Hospital Management System</h3>
              <p>Software built with Java and Flask backend to manage hospital records, appointments, and billing workflows.</p>
            </div>
            <div className="card">
              <h3>Plant Disease Predection</h3>
              <p>Machine Learning project predect the plant disease using CNN, Stream light library of Python for interface and data collected from Kaggel dataset. </p>
            </div>
            <div className="card">
              <h3>Weather API</h3>
              <p>It is an interactive weather web application that allows users to enter a city name and retrieve real-time weather information using the OpenWeatherMap API.</p>
            </div>

          </div>
          
        </motion.section>

        {/* Internship */}
        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2>Internship</h2>
          <div className="cards1">
            <div className="card1">
              
              <h2>Amiti Software Technologies (Sep 2024 - Dec 2024)</h2>
               <p>Developed frontend web applications focusing on user-friendly experiences and optimized performance. Projects included Weather Application, Spend Analysis, and Lenskart Clone.
               </p>
            </div>
          </div>
          
        </motion.section>

        {/* Certifications */}
        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2>Certifications</h2>
          <div className="cards">
            <div className="card">
              <h3>Typing Speed Tester</h3>
            </div>
            <div className="card">
              <h3> Introduction to Web Development</h3>
            </div>
            <div className="card">
              <h3>Getting Started with Git and GitHub</h3>
            </div>
            <div className="card">
              <h3>Developing Front-End Apps with React</h3>
            </div>
          </div>
        </motion.section>

        

        {/* Contact */}
        <motion.section className="section contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2>Contact</h2>
          <div className="contact-list">
            <p><Phone size={18}/> +91-7204945862</p>
            <p><Mail size={18}/> shashankm7204@gmail.com</p>
            <p><Github size={18}/> <a href="https://github.com/Shashank-machs" target="_blank">github.com/yourusername</a></p>
            <p><Linkedin size={18}/> <a href="https://www.linkedin.com/in/shashank-m-a6b8752b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">linkedin.com/in/yourprofile</a></p>
            <p><FileText size={18}/> <a href="/Shashank_M_Resume-4%20(1).pdf" download>Download Resume</a></p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
