import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import HeaderContainer from './components/Header/HeaderContainer';

import './normalize.css'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <main className="main container">
          {/* <NavBar state = { props.state.navbar } /> */}
          <NavBarContainer />
          <Content />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
