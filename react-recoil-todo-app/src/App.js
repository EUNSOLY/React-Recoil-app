import "./App.css";
import TodoitemCreator from "./Components/TodoitemCreator";
import { useRecoilValue } from "recoil";
import { filterdTodoListState, todoListState } from "./TodoAtoms";
import TodoItem from "./Components/TodoItem";
import TodoListFilters from "./Components/TodoListFilters";
import TodoListStats from "./Components/TodoListStats";

function App() {
  const todoList = useRecoilValue(todoListState);
  const filterdTodoList = useRecoilValue(filterdTodoListState);

  return (
    <div className="App">
      <TodoListFilters />
      <TodoListStats />
      <TodoitemCreator />

      {filterdTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
