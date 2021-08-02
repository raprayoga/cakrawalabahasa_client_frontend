import LandingPage from "components/pages/landingPage/LandingPage";
import AboutUs from "components/pages/aboutUs/AboutUs";
import OurPrograms from "components/pages/ourProgram/OurPrograms";
import Contact from "components/pages/contact/Contact";
import NewsDetail from "components/pages/newsDetail/NewsDetail";
import NewsList from "components/pages/newsList/NewsList";
import News from "components/pages/news/News";
import SignUp from "components/pages/signUp/SignUp";
import SignIn from "components/pages/signIn/SignIn";

  const routes = [
    {
      path: "/",
      exact: true,
      component: LandingPage
    },
    {
      path: "/about-us",
      component: AboutUs
    },
    {
      path: "/our-programs",
      component: OurPrograms
    },
    {
      path: "/news",
      component: News
    },
    {
      path: "/news-detail/:id",
      component: NewsDetail
    },
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "/sign-up",
      component: SignUp
    },
    {
      path: "/sign-in",
      component: SignIn
    },
    {
      path: "/all-news",
      component: NewsList
    }
  ];

export default routes