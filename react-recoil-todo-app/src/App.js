import "./App.css";
import React from "react";
import TodoitemCreator from "./Components/TodoitemCreator";
import { useRecoilValue } from "recoil";
import { filterdTodoListState, todoListState } from "./TodoAtoms";
import TodoItem from "./Components/TodoItem";
import TodoListFilters from "./Components/TodoListFilters";
import TodoListStats from "./Components/TodoListStats";
import CurrentUserInfo from "./Components/CurrentUserInfo";

function App() {
  const todoList = useRecoilValue(todoListState);
  const filterdTodoList = useRecoilValue(filterdTodoListState);

  return (
    <div className="App">
      <React.Suspense fallback={<div>Loding....</div>}>
        <CurrentUserInfo />
      </React.Suspense>
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
