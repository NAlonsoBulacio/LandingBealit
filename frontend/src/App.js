import './App.css';
import { Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import LandingVideo from "./views/LandingVideo/LandingVideo";
const App = () => {
  return (
    <div className="App ">
      <Route exact path="/" component={Landing} />
      <Route exact path="/video" component={LandingVideo} />
    </div>
  );
}

export default App;
