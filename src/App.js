import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch
import Sidebars from './components/Sidebars/Sidebars';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
// import SelectedCandidates from './components/SelectedCandidates'; // Create SelectedCandidates component
// import Contact from './components/Contact'; // Create Contact component
// import About from './components/About'; // Create About component
import './app.css';
import SelectedCandidates from './components/SelectedCandidates/SelectedCandidates';
import { useStateContext } from "./Provider/contextProvider";

function App() {
  const {storeData, setStoreData,data,setData} = useStateContext()
  return (
    <Router>
      <div className="App">
        <div className='container'>
          {/* <div className='sidebar-container'>
            <Sidebars />
          </div> */}
          <div className='main-content'>
            <div className='header-container'>
              <Header storeData={storeData} data={data} />
            </div>
            
            <div className='main-card-container'>
              <Routes>
                <Route path="/"  element={<Card data={data} setData={setData} storeData={storeData} setStoreData={setStoreData}/>} />
                <Route path="/selected"    element={<SelectedCandidates data={data} setData={setData} storeData={storeData} setStoreData={setStoreData}/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
