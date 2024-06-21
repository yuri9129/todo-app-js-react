import React, {useState} from 'react';
import './App.css';
import {UserCard} from "./components/UserCard";
import axios from "axios";
import {User} from "./types/api/user";
import {UserProfile} from "./types/UserProfile";

const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@gmail.com",
  address: "my-address"
}


function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);

    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => {
          return {
            id: user.id,
            name: `${user.name}(${user.username})`,
            email: user.email,
            address: `${user.address.city}${user.address.suite}${user.address.street}`,
          }
        });
        setUserProfiles(data);
      })
      .catch(err => {
        console.log(err)
        setError(true);
      })
      .finally(() => setLoading(false));
  }
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
