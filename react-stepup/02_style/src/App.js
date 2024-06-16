import logo from './logo.svg';
import './App.css';
import {InlineStyle} from "./components/InlineStyle";
import {CssModules} from "./components/CssModules";
import {StyledJsx} from "./components/StyledJsx";
import {StyledComponents} from "./components/StyledComponents";
import {Emotion} from "./components/Emotion";

function App() {
  return (
    <div className="App">
      <InlineStyle/>
      <CssModules/>
      <StyledJsx/>
      <StyledComponents/>
      <Emotion/>
    </div>

  );
}

export default App;
