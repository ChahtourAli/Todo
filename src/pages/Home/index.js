import React, { useState } from "react";
import TodoItem from "../../components/TodoItem";
const Home = () => {
  const [messagesList, setMessagesList] = useState([]);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    setMessagesList((prev) => [...prev, { value: message, isDone: false }]);
    setMessage("");
  };
  const onTodoItemDelete = (index) => {
    setMessagesList((prev) => prev.filter((message, i) => i != index));
  };
  const toggleTodoItemDone = (index) => {
    setMessagesList((prev) => {
      const tmp = [...prev];
      tmp[index].isDone = !tmp[index].isDone;
      return tmp;
    });
  };
  const editTodoItem = (index, val) => {
    setMessagesList((prev) => {
      const tmp = [...prev];
      tmp[index].value = val;
      return tmp;
    });
  };
  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} value={message} />
      <button onClick={onSubmit} disabled={!message}>
        Click
      </button>
      <ul>
        {messagesList.map((el, index) => {
          return (
            <TodoItem
              editTodoItem={(val) => editTodoItem(index, val)}
              key={index}
              onTodoItemDelete={() => onTodoItemDelete(index)}
              value={el.value}
              isDone={el.isDone}
              toggleTodoItemDone={() => toggleTodoItemDone(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
