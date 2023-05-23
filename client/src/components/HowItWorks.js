import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Ai-Search.json";
import animationData2 from "../assets/Ai-Chat.json";
import animationData3 from "../assets/AI-Analysis.json";

const HowItWorks = () => {
  return (
    <div className="howItWorksSection">
      <section>
        <div className="container px-5 py-24 mx-auto">
          {/* Title and Description */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title text-4xl font-bold title-font mb-10">
              HOW IT WORKS
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

          <div className="simple-search-card flex flex-wrap -m-4">
            <div className="card-info-section p-4 lg:w-1/2">
              <h2 className="card-heading">Simple AI Search</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </p>
              <button type="button" className="tryNowButton">
                Try Now
              </button>
            </div>
            <div className="card-img-container">
              <Lottie className="ai-search-img" animationData={animationData} />
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="ai-chat-card p-4 lg:w-1/2">
              <div>
                <h2 className="ai-chat-heading">AI Chat</h2>
                <p className="ai-chat-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="chatSearchButton">AI Chat Search</button>
              </div>
              <Lottie className="ai-chat-img" animationData={animationData3} />
            </div>

            <div className="ai-analysis-card p-4 lg:w-1/2">
              <div>
                <h2 className="analysis-heading">AI Analysis</h2>
                <p className="analysis-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="ai-analysis-btn">AI Analysis</button>
              </div>
              <Lottie className="ai-analysis-img" animationData={animationData2} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
