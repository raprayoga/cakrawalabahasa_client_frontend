import LandingPage from "components/pages/landingPage/LandingPage";
import AboutUs from "components/pages/aboutUs/AboutUs";
import OurPrograms from "components/pages/ourProgram/OurPrograms";
import Contact from "components/pages/contact/Contact";
import NewsDetail from "components/pages/news/newsDetail/NewsDetail";
import NewsList from "components/pages/news/newsList/NewsList";
import News from "components/pages/news/newsMain/News";
import SignUp from "components/pages/signUp/SignUp";
import SignIn from "components/pages/signIn/SignIn";
import LocalHeroes from "components/pages/registration/localHeroes/LocalHeroes";
import IntHeroes from "components/pages/registration/intHeroes/IntHeroes";
import Member from "components/pages/registration/member/Member";

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
      path: "/news/detail/:id",
      component: NewsDetail
    },
    {
      path: "/news/list",
      component: NewsList
    },
    {
      path: "/news",
      component: News
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
      path: "/registration/local-heroes",
      component: LocalHeroes
    },
    {
      path: "/registration/int-heroes",
      component: IntHeroes
    },
    {
      path: "/registration/member",
      component: Member
    }
  ];

export default routes