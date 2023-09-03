import { useState, useEffect } from "react";
import { User } from "../../interfaces/users";
import { ToDo } from "../../interfaces/ToDoList";

import TodoList from "../TodoList/TodoList";

function UserCard(user: User): JSX.Element {
  const [toDo, setToDo] = useState<ToDo[]>([]);

  const fetchToDo = async () => {
    if (toDo.length > 0) {
      setToDo([]);
      return;
    }
    try {
      let dataBaseJson = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`
      );
      let dataBase = await dataBaseJson.json();
      setToDo(dataBase);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card col-3" onClick={fetchToDo}>
      <h3>{` username:  ${user.username}`}</h3>
      <p>{` email: ${user.email}`}</p>
      {toDo.length > 0 && <TodoList task={toDo} />}
    </div>
  );
}

export default UserCard;
