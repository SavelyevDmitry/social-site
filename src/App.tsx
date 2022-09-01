import React, { useEffect } from 'react';
import { HashRouter} from 'react-router-dom';

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import HeaderContainer from './components/Header/HeaderContainer';

import './normalize.css'
import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getIsInitialized } from './redux/selectors/app-selector';
import { initialize } from './redux/reducers/app-reducer';
import Spinner from './assets/spinner/Spinner';

const App = () => {
  const isInitialized = useSelector(getIsInitialized)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize() as any)
   }, []);

  return (
    !isInitialized ? <Spinner />
      : <div className="App">
      <HashRouter>
        <HeaderContainer />
        <main className="main container">
          <NavBarContainer />
          <Content />
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
