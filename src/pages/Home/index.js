import React, { useState } from "react";

const Home = () => {
  const [messagesList, setMessagesList] = useState([]);
  const [message, setMessage] = useState("");
  const onSubmit = () => {
    setMessagesList((prev) => [...prev, message]);
    setMessage("");
  };
  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} value={message} />
      <button onClick={onSubmit}>click</button>
      <ul>
        {messagesList.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
