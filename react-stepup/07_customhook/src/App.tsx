import React, {useState} from 'react';
import './App.css';
import {UserCard} from "./components/UserCard";
import axios from "axios";
import {User} from "./types/api/user";
import {UserProfile} from "./types/UserProfile";
import {useAllUsers} from "./hooks/useAllUsers";

const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@gmail.com",
  address: "my-address"
}


function App() {
  const {getUsers, userProfiles, loading, error} = useAllUsers()

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br/>
      {error ? (
        <p style={{color: "red"}}>データの取得に失敗しました({error})</p>
      ) : loading ? (
        <p>Loading....</p>
      ) : (
        <>
          {userProfiles.map((user) => {
            return <UserCard key={user.id} user={user}/>
          })}
        </>
      )}
    </div>
  );
}

export default App;
