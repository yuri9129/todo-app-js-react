import './App.css';
import {PrimaryButton} from "./components/atoms/button/PrimaryButton";
import {SecondaryButton} from "./components/atoms/button/SecondaryButton";
import {SearchInput} from "./components/molecules/SearchInput";
import {UserCard} from "./components/organisms/user/UserCard";

const user = {
  name: "たろう",
  image: "https://picsum.photos/id/237/160/160",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com"
}


function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br/>
      <SearchInput/>
      <UserCard user={user}/>
    </div>
  );
}

export default App;
