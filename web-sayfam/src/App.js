import "./App.css";
import WebSiteProvider from "./contexts/websiteContext";
import Footer from "./layouts/Footer";
import MyHeader from "./layouts/MyHeader";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <WebSiteProvider>
        <MyHeader />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
        <ToastContainer />
      </WebSiteProvider>
    </>
  );
}

export default App;
