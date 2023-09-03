interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface array {
  task: ToDo[];
}

function TodoList(toDo: array): JSX.Element {
  console.log(toDo);

  return (
    <div>
      <ul>
        {toDo.task.splice(0, 5).map((item) => (
          <li key={item.id}> {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
