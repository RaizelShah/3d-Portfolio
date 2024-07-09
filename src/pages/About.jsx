import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import { github, linkedin , instagram} from "../assets/icons";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Raizel
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 items-center justify-center">
        <p className="text-justify">
          I'm a pre-final year student at the Vellore Institute of Technology,
          fueled by a passion for web development. With a keen focus on
          front-end development, I bring a problem-solving approach and a
          tenacious spirit to every project I tackle.
        </p>
        <p className="text-justify">
          Beyond the code, I'm a lifelong learner who thrives in collaborative
          environments. This portfolio showcases my skills and the projects I've
          poured my creativity into. I'm always eager to connect, so feel free
          to reach out and chat!
        </p>
        <br />
        <p className="blue-gradient_text text-2xl font-semibold drop-shadow">
          <q>Coding, Debugging, Never giving up in life!</q>
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap  gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-lg" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with diverse set of teams, leveling up my skills and
            teaming up with smart people. Here's a rundown:
          </p>
        </div>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200" />

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Social Links</h3>
        <div className="mt-16 flex flex-wrap  gap-12">
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-lg" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <Link
                to="https://github.com/RaizelShah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="Github"
                />
              </Link>
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-lg" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <Link
                to="https://www.linkedin.com/in/raizelshah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                />
              </Link>
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-lg" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <Link
                to="https://www.instagram.com/raizel_shah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
