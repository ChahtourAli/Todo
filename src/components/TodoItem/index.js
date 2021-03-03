import React, { useState } from "react";

const TodoItem = ({
  onTodoItemDelete,
  value,
  isDone,
  toggleTodoItemDone,
  editTodoItem,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={isDone ? "text-success" : ""}>
      {!isEditing ? (
        <>
          {value}
          <button onClick={onTodoItemDelete}>Supprimer</button>
          <button onClick={toggleTodoItemDone}>
            {isDone ? "undo" : "done"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      ) : (
        <>
          <input onChange={(e) => editTodoItem(e.target.value)} value={value} />
          <button onClick={() => setIsEditing(false)}>save</button>
        </>
      )}
    </li>
  );
};
export default TodoItem;
