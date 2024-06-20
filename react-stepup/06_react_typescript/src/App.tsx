import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {Todo} from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};


function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
          setTodos(response.data);
        }
      )
  }

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データを取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
