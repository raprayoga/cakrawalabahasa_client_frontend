import LandingPage from "components/pages/landingPage/LandingPage";
import AboutUs from "components/pages/aboutUs/AboutUs";
import OurPrograms from "components/pages/ourProgram/OurPrograms";
import Contact from "components/pages/contact/Contact";
import SignUp from "components/pages/signUp/SignUp";
import SignIn from "components/pages/signIn/SignIn";
import NewsDetail from "components/pages/newsDetail/NewsDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.scss";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/about-us" component={AboutUs}></Route>
        <Route path="/our-programs" component={OurPrograms}></Route>
        <Route path="/news-detail/:id" component={NewsDetail}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/sign-in" component={SignIn}></Route>
      </Router>
    </>
  );
}

export default App;
