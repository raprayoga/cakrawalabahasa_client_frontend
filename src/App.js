import LandingPage from "components/pages/landingPage/LandingPage";
import AboutUs from "components/pages/aboutUs/AboutUs";
import OurPrograms from "components/pages/ourProgram/OurPrograms";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.scss";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/about-us" component={AboutUs}></Route>
        <Route path="/our-programs" component={OurPrograms}></Route>
      </Router>
    </>
  );
}

export default App;
