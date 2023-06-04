import React, { useState, useRef } from "react";
import "./resume1.css";
import html2pdf from "html2pdf.js";

const Resume = () => {
  const [name, setName] = useState("John Doe");
  const [role, setRole] = useState("Front-end Developer");
  const [location, setLocation] = useState("Mumbai,India");
  const [phone, setPhone] = useState("1234567890");
  const [website, setWebsite] = useState("https://abcxyzyourwebsite.com");
  const [summary, setSummary] = useState(
    "A passionate front-end developer with 3 years of experience in building responsive and user-friendly web applications."
  );
  const [experience, setExperience] = useState(
    "3 years of experience as a front-end developer at XYZ Company."
  );
  const [projects, setProjects] = useState("HTML, CSS AND JS Projects.");
  const [skills, setSkills] = useState("Communication & Presentation Skills.");

  const [selectedImage, setSelectedImage] = useState(null);
  const resumeRef = useRef(null);

  const updateName = () => {
    const newName = prompt("Enter the new name:");
    if (newName) {
      setName(newName);
    }
  };

  const updateRole = () => {
    const newRole = prompt("Enter the new role:");
    if (newRole) {
      setRole(newRole);
    }
  };

  const updateLocation = () => {
    const newLocation = prompt("Enter the new Location:");
    if (newLocation) {
      setLocation(newLocation);
    }
  };

  const updatePhone = () => {
    const newPhone = prompt("Enter the new Phone:");
    if (newPhone) {
      setLocation(newPhone);
    }
  };

  const updateWebsite = () => {
    const newWebsite = prompt("Enter the new Website:");
    if (newWebsite) {
      setWebsite(newWebsite);
    }
  };

  const updateSummary = () => {
    const newSummary = prompt("Enter the new summary:");
    if (newSummary) {
      setSummary(newSummary);
    }
  };

  const updateExperience = () => {
    const newExperience = prompt("Enter the new experience:");
    if (newExperience) {
      setExperience(newExperience);
    }
  };

  const updateProjects = () => {
    const newProjects = prompt("Enter the new Projects:");
    if (newProjects) {
      setProjects(newProjects);
    }
  };

  const updateSkills = () => {
    const newSkills = prompt("Enter the new Skills:");
    if (newSkills) {
      setSkills(newSkills);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const resetResume = () => {
    setName("John Doe");
    setRole("Front-end Developer");
    setLocation("Mumbai,India");
    setPhone("1234567890");
    setWebsite("https://abcxyzyourwebsite.com");
    setSummary(
      "A passionate front-end developer with 3 years of experience in building responsive and user-friendly web applications."
    );
    setExperience(
      "3 years of experience as a front-end developer at XYZ Company."
    );
    setProjects("HTML, CSS AND JS Projects.");
    setSkills("Communication & Presentation Skills.");
    setSelectedImage(null);
  };

  const downloadAsPDF = () => {
    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    const clonedResume = resumeRef.current.cloneNode(true);
    const fileInputWrapper = clonedResume.querySelector(".file-input-wrapper");
    fileInputWrapper.remove();

    const buttons = clonedResume.querySelectorAll("button");
    buttons.forEach((button) => button.remove());

    html2pdf().set(opt).from(clonedResume).save();
  };

  return (
    <div className="resume" ref={resumeRef}>
      <header>
        <button className="download-button" onClick={downloadAsPDF}>
          Click & Download Resume PDF
        </button>
        <div className="profile-picture">
          <img
            className="profile-image"
            src={selectedImage || "./user.png"}
            alt="Profile"
          />
        </div>
        <section>
          {/* <h2>Upload Image</h2> */}
          <div className="file-input-wrapper">
            <input type="file" id="image-upload" onChange={handleImageUpload} />
            <label htmlFor="image-upload" className="file-input-button">
              Upload Profile Picture
            </label>
          </div>
        </section>
        <div className="name-role-wrapper">
          <div className="name-wrapper">
            <h1>{name}</h1>
            <button onClick={updateName}>Update Name</button>
          </div>
          <div className="role-wrapper">
            <p>{role}</p>
            <button onClick={updateRole}>Update Role</button>
          </div>
          <div className="role-wrapper">
            <p>{location}</p>
            <button onClick={updateLocation}>Update Location</button>
          </div>
          <div className="role-wrapper">
            <p>{phone}</p>
            <button onClick={updatePhone}>Update Phone</button>
          </div>
          <div className="role-wrapper">
            <p>{website}</p>
            <button onClick={updateWebsite}>Update Website</button>
          </div>
        </div>
      </header>
      <section>
        <h2>About Me</h2>
        <p className="summary">{summary}</p>
        <button onClick={updateSummary}>Update</button>
      </section>
      <section>
        <h2>Professional Experience</h2>
        <p>{experience}</p>
        <button onClick={updateExperience}>Update</button>
      </section>
      <section>
        <h2>Projects</h2>
        <p>{projects}</p>
        <button onClick={updateProjects}>Update</button>
      </section>
      <section>
        <h2>Skills</h2>
        <p>{skills}</p>
        <button onClick={updateSkills}>Update</button>
      </section>

      <button className="reset-button" onClick={resetResume}>
        Reset Resume
      </button>
    </div>
  );
};

export default Resume;
