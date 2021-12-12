import React, {useState} from 'react';
import './App.css';
import Main from './components/Main/Main';
import CaseStudy from './components/CaseStudy/CaseStudy';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

const App = () => {
  const [mainView, setMainView] = useState(true);
  const [name, setName] = useState("");

  const viewCaseStudy = (study) => {
    setMainView(false);
    setName(study)
  }

  const viewMain = () => {
    setMainView(true);
  }

  return (
    <div className="App">
      <Header viewMain={viewMain} />
      { mainView ? 
        <Main viewCaseStudy={viewCaseStudy}/>
        :
        <CaseStudy viewMain={viewMain} name={name} />
      }
      <Footer />
    </div>
  );
};

export default App;