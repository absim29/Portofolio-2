import React from "react";
import SiteCard from "../SiteCard";
import sites from "../Data";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "../../assets/Avatar.png";
import Typewriter from "typewriter-effect";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="d-flex flex-column align-items-center my-5"
    >
      <div className="d-flex flex-wrap flex-sm-nowrap justify-content-center mb-5 gap-3 ">
        <div className="col-12 col-sm-6 avatar d-flex justify-content-center">
          <img src={Avatar} alt="avatar" className="avatar rounded" />
        </div>
        <div
          className="col-12 col-sm-6 d-flex flex-column justify-content-between"
          style={{ width: 300 }}
        >
          <h1 className="name">Bianca S.</h1>
          <h4 className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  "Web Designer", // First title
                  "Front-End Developer", // Second title
                  "From Cake Design to Web Design", // Additional title
                ],
                autoStart: true,
                loop: true, // Loops through the titles indefinitely
                deleteSpeed: 50, // Speed of deletion
                pauseFor: 2000, // Pause before deleting
              }}
            />
          </h4>
          <div>
            <p>Connect with me: </p>

            <div className="d-flex gap-2">
              <Button
                className="my-button"
                size="small"
                component="a"
                href="https://www.linkedin.com/in/andreea-bianca-simon-front-end-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                LinkedIn
                <LinkedInIcon fontSize="small" style={{ marginLeft: 3 }} />
              </Button>
              <Button
                className="my-button"
                size="small"
                component="a"
                href="https://github.com/absim29"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <GitHubIcon fontSize="small" style={{ marginRight: 4 }} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
        {sites.map((site, index) => (
          <SiteCard
            key={index}
            title={site.title}
            description={site.description}
            image={site.image}
            demoLink={site.demoLink}
            githubLink={site.githubLink}
            tags={site.tags}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default HomePage;
