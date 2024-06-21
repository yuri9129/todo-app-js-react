import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import {Todo} from "./Todo";
import {TodoType} from "Types/todo";
import {Text} from "./Text";
import {UserProfile} from "./UserProfile";
import {User} from "./Types/user";

const user: User = {
  name: "たろう",
  hobbies: ["映画", "ゲーム"]
}

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
      <UserProfile user={user} />
      <Text color="red" fontSize="18px"/>
      <button onClick={onClickFetchData}>データを取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
