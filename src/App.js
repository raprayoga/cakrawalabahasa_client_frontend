import LandingPage from "components/pages/landingPage/LandingPage";
import AboutUs from "components/pages/aboutUs/AboutUs";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.scss";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/about-us" component={AboutUs}></Route>
      </Router>
    </>
  );
}

export default App;
