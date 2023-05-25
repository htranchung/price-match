import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Ai-Search.json";
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
              Pricema AI allows you to analyze and visualize your sales data
              with ease. Simply start by uploading the data into our price
              visualization tool. From their you can Fine tune your data further
              or simply chat with Pricema AI about your data. From there you can
              have Price AI analyze and visualize your data for you.
            </p>
          </div>

          <div className="simple-search-card flex flex-wrap -m-4">
            <div className="card-info-section p-4 lg:w-1/2">
              <h2 className="card-heading">Visualization Your Data</h2>
              <p className="card-text">
                Upload your data into Pricema's data visualization tool and fine
                tune your data. When you are done simply download your updated
                data set and take it to it to Pricema chat to talk with your
                data.
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
                  Engage in natural and engaging conversations with your data.
                  Our AI Chat feature, allows you to chat with your data with
                  ease. Simply upload your data file, and start chatting with
                  Pricema AI.
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
                  Ready to take you data analysis to the next level?Our advanced
                  AI analysis technology leverages cutting-edge algorithms to
                  process and extract valuable insights from complex data sets,
                  empowering you to make data-driven decisions with speed and
                  accuracy.
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
