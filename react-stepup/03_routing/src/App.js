import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

import './App.css';
import {Home} from "./Home";
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import {Page1DetailA} from "./Page1DetailA";
import {Page1DetailB} from "./Page1DetailB";
import {Router} from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link><br/>
        <Link to="/page1">Page1</Link><br/>
        <Link to="/page2">Page2</Link>
      </div>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
