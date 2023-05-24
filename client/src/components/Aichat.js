import "../normalize.css";
import { useState } from "react";

function Aichat() {
  // Add State for input and Chat Log
  const [input, setInput] = useState("");
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("ada");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "What can I help you find today?",
    },
    {
      user: "me",
      message: "I want to use ChatGPT today",
    },
  ]);

  // Clear chat log after submit
  function clearChatLog() {
    setChatLog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];
    setInput("");
    setChatLog(chatLogNew);

    // Fetch response to the api combining the chat log array of messages and sending it as a message to localhost:3000 as a POST request
    const messages = chatLogNew.map((message) => message.message).join("\n");
    const response = await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
        currentModel,
      }),
    });

    const data = await response.json();
    setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}` }]);
  }

  return (
    <div className="Aichat">
      <aside className="side-menu">
        <div className="side-menu-button" onClick={clearChatLog}>
          <span>+</span>New Chat
        </div>
      </aside>

      <section className="chat-box">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              className="chat-input-textarea"
              rows="1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What can I help you find today?"></input>
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chat-gpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chat-gpt"}`}>
          {message.user === "gpt" && (
            <img
              src="https://avatars.dicebear.com/api/bottts/gpt.svg"
              alt="chat-gpt"
            />
          )}
        </div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};

export default Aichat;
