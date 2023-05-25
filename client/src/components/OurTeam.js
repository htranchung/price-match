import React from "react";
import Harrison from "../assets/Harrison.jpg";
import Tanvir from "../assets/Tanvir.jpg";
import Ricardo from "../assets/Ricardo.jpg";
import Ray from "../assets/Ray.jpg";
import Website from "../assets/Website.png";
import Github from "../assets/Github.png";
import Linkedin from "../assets/LinkedIn.png";

const OurTeam = () => {
  return (
    <div id="ourTeamSection" className="bg-[#4d3ff5]">
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title text-4xl font-bold title-font mb-10">
              OUR TEAM
            </h1>
            <p className="subtitle lg:w-2/3 mx-auto leading-relaxed text-base">
              This project was passionately created by students from the
              University of Minnesota Full-Stack Software Development Program.
              Our team is comprised of four students: Harrison, Tanvir, Ricardo,
              and Raymond. If you would like to learn more about our team,
              please visit their portfolio page, GitHub page, or LinkedIn
              profile.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="team-card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="profile-img flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Harrison}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-black tracking-widest">
                    Harrison
                  </h2>
                  <h3 className="mb-3">UX Designer/Developer</h3>
                  <p className="mb-4">
                    Harrison is a proud graduate of the University of
                    Minnesota's Full-Stack Web Development Program. Equipped
                    with a strong foundation in Front-End and Back-End
                    development, Harrison is skilled in HTML, CSS, JavaScript,
                    and frameworks such as React and Node.js. With a passion for
                    creating seamless online experiences, Harrison brings
                    expertise in API integration, and responsive design
                    principles to contribute to innovative web development
                    projects.
                  </p>
                  <span className="inline-flex items-center">
                    <a
                      className="links github-link flex"
                      href="https://github.com/htranchung">
                      <img src={Github} alt="Github" />
                    </a>
                    <a
                      className="links flex"
                      href="https://www.linkedin.com/in/harrison-tran-chung-1910b01b5/">
                      <img src={Linkedin} alt="LinkedIn" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/2">
              <div className="team-card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="profile-img flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Tanvir}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Tanvir Khondakar
                  </h2>
                  <h3 className="text-gray-700 mb-3">UX Designer/Developer</h3>
                  <p className="mb-4 ">
                    Tanvir is a recent graduate of the University of Minnesota
                    Full-Stack Web Development program. He has a passion for
                    web-design, blockchain technology, and AI application
                    development.
                  </p>
                  <span className="inline-flex items-center">
                    <a
                      className="links github-link flex"
                      href="https://github.com/tanvirkhon">
                      <img src={Github} alt="Github" />
                    </a>
                    <a className="links flex" href="https://tanvir.digital/">
                      <img src={Website} alt="Website" />
                    </a>
                    <a
                      className="links flex"
                      href="https://www.linkedin.com/in/tanvirkhondakar/">
                      <img src={Linkedin} alt="LinkedIn" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/2">
              <div className="team-card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="profile-img flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Ricardo}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Ricardo
                  </h2>
                  <h3 className="mb-3">UX Designer/Developer</h3>
                  <p className="mb-4">
                    Full Stack Developer who is passionate about continuously
                    expanding my skill set and keeping up-to-date with the
                    latest technologies. Knowledgeable of backend and frontend
                    development requirements. Handles any part of process with
                    ease. Collaborative team player with excellent technical
                    abilities with lots of on hand experience.
                  </p>
                  <span className="inline-flex items-center">
                    <a
                      className="links github-link flex"
                      href="https://github.com/ricardoci">
                      <img src={Github} alt="Github" />
                    </a>
                    <a
                      className="links flex"
                      href="https://reactportfolio22.herokuapp.com/">
                      <img src={Website} alt="Website" />
                    </a>
                    <a
                      className="links flex"
                      href="https://www.linkedin.com/in/ricardo-cisneros-5b8b3024b">
                      <img src={Linkedin} alt="LinkedIn" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="team-card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="profile-img flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Ray}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Raymond
                  </h2>
                  <h3 className="mb-3">UX Designer/Developer</h3>
                  <p className="mb-4">
                    Graduate of the University of Minnesota Full-Stack Web
                    Development program.
                  </p>
                  <span className="inline-flex items-center">
                    <a
                      className="links github-link flex"
                      href="https://github.com/Bright-Verdant">
                      <img src={Github} alt="Github" />
                    </a>
                    <a
                      className="links flex"
                      href="https://www.linkedin.com/in/raymond-stack-vanasse-870164128/">
                      <img src={Linkedin} alt="LinkedIn" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
