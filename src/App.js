import './styles/App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ModeToggler from './components/ModeToggler';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App(props) {
  return (
    <div>
      <ResponsiveAppBar/>
      <ModeToggler/>
      <Header {...props} firstName="Mike" lastName="Giovanetti"/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
