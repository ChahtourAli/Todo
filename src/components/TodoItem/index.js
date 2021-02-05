import React, { useState } from "react";

const TodoItem = ({
  onTodoItemDelete,
  index,
  value,
  isDone,
  ToggleTodoItemDone,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const EditState = (index) => {
    setIsEditing(true);
  };

  return (
    <li className={isDone ? "text-success" : ""}>
      {value}
      {!isEditing ? (
        <>
          <button onClick={() => onTodoItemDelete(index)}>Supprimer</button>
          <button onClick={ToggleTodoItemDone}>
            {isDone ? "undo" : "done"}
          </button>
          <button onClick={() => EditState(index)}>Edit</button>
        </>
      ) : (
        <>
          <input value={value} />
          <button>save</button>
        </>
      )}
    </li>
  );
};
export default TodoItem;
