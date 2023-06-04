import * as React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import Layout from './components/Skeleton/Layout';
import About from './components/About';
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<About />} />
          <Route path="about-me" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
