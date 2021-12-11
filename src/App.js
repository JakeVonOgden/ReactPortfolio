import React from 'react';
import './App.css';
import {Header, Landing, /*, About, Projects, Contact, Footer*/} from './components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
      {/*<About />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;