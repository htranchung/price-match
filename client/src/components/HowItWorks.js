import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Data-Analysis.json";
import animationData2 from "../assets/Ai-Chat.json";
import animationData3 from "../assets/AI-Analysis.json";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div id="howItWorksSection" className="howItWorksSection">
      <section>
        <div className="container px-5 py-24 mx-auto w-4/5">
          {/* Title and Description */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title text-4xl font-bold title-font mb-10">
              HOW IT WORKS
            </h1>
            <p className="subtitle lg:w-2/3 mx-auto leading-relaxed text-base">
              Pricema AI enables you to analyze and visualize your sales data
              effortlessly. Begin by uploading the data to our price
              visualization tool. From there, you can refine your data or engage
              in a conversation with Pricema AI about it. Then, let Price AI
              analyze and visualize your data for you.
            </p>
          </div>

          <div className="simple-search-card flex flex-wrap -m-4">
            <div className="card-info-section p-4 lg:w-1/2">
              <h2 className="card-heading">Visualize your Data</h2>
              <p className="card-text">
                Upload your data to Pricema's data visualization tool and refine
                it. Once you're done, download your updated dataset and bring it
                to Pricema chat for a conversation with your data.
              </p>
              <a
                href="https://tanvirkhon-xcel-editor-app-gih7s1.streamlit.app/
"
                target="_blank">
                <button type="button" className="tryNowButton">
                  Try Now
                </button>
              </a>
            </div>
            <div className="card-img-container">
              <Lottie className="ai-search-img" animationData={animationData} />
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="ai-chat-card p-4 lg:w-1/2">
              <div>
                <h2 className="ai-chat-heading">Pricema Chat</h2>
                <p className="ai-chat-text">
                  Engage in natural and interactive conversations with your data
                  using our AI Chat feature. Easily upload your data file and
                  start conversing with Pricema AI.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      " https://tanvirkhon-file-reader-app-y2jcf4.streamlit.app/"
                    )
                  }
                  className="chatSearchButton">
                  AI Chat Search
                </button>
              </div>
              <Lottie className="ai-chat-img" animationData={animationData3} />
            </div>

            <div className="ai-analysis-card p-4 lg:w-1/2">
              <div>
                <h2 className="analysis-heading">Pricema Analysis</h2>
                <p className="analysis-text">
                  Are you ready to elevate your data analysis to new heights?
                  Our advanced AI analysis technology utilizes state-of-the-art
                  algorithms to process and extract valuable insights from
                  intricate data sets. This empowers you to make data-driven
                  decisions swiftly and accurately.
                </p>
                <Link to="/Payment">
                  <button className="ai-analysis-btn">AI Analysis</button>
                </Link>
              </div>
              <Lottie
                className="ai-analysis-img"
                animationData={animationData2}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
