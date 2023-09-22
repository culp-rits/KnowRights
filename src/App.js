import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Group from "./pages/Group";
import Group1 from "./pages/Group1";
import Group2 from "./pages/Group2";
import Forum from "./pages/Forum";
import Lvl1Info from "./pages/Lvl1Info";
import Lvl1Success from "./pages/Lvl1Success";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/group-12":
        title = "";
        metaDescription = "";
        break;
      case "/group-11":
        title = "";
        metaDescription = "";
        break;
      case "/forum":
        title = "";
        metaDescription = "";
        break;
      case "/lvl1info":
        title = "";
        metaDescription = "";
        break;
      case "/lvl1success":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Group />} />
      <Route path="/group-12" element={<Group1 />} />
      <Route path="/group-11" element={<Group2 />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/lvl1info" element={<Lvl1Info />} />
      <Route path="/lvl1success" element={<Lvl1Success />} />
    </Routes>
  );
}
export default App;
