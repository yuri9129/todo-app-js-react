import './App.css';

import {Router} from "./router/Router";




function App() {
  return (
    <Router/>
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    //     <SecondaryButton>検索</SecondaryButton>
    //     <br/>
    //     <SearchInput/>
    //     <UserCard user={user}/>
    //   </DefaultLayout>
    // </BrowserRouter>
  );
}

export default App;
