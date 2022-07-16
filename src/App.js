import './normalize.css'
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarContainer from './components/NavBar/NavBarContainer';

function App(props) {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main container">
          {/* <NavBar state = { props.state.navbar } /> */}
          <NavBarContainer />
          <Content />
        </main>
        <Footer className="footer"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
