import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from './components/Skeleton/Layout';
import About from './components/About';
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";



const darkTheme = () => {
  if (ThemeContext) {
    return (
      createTheme({
        palette: {
          mode: 'dark',
        },
      }));
  } else {
    return (
      createTheme({
        palette: {
          mode: 'light',
        },
      }));
  }
}

const ThemeContext = React.createContext('light');

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme(ThemeContext)}>
        <React.Fragment>
          <CssBaseline />

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
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

export default App;
