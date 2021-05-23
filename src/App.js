import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </>
  );
}

export default App;
