import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogsScreen from "./screens/BlogsScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import HomeScreen from "./screens/HomeScreen";
import "normalize.css";
import ContactScreen from "./screens/ContactScreen";
import ServicesScreen from "./screens/ServicesScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import CommunityScreen from "./screens/CommunityScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomeScreen />} />
        <Route path="/about" element={<AboutUsScreen />} />
        <Route path={"/blogs"} element={<BlogsScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/community" element={<CommunityScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
