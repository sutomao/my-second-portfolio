import './App.css';
import AboutmePege from './components/AboutmePege';
import Header from './components/Header';
import HobbyPage from './components/HobbyPage';
import HomePage from './components/HomePage';
import StudyPage from './components/StudyPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
<Router>
    <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutmePege />} />
          <Route path='/study' element={<StudyPage />} />
          <Route path='/hobby' element={<HobbyPage />} />
        </Routes>  
      </div>
</Router>      
  );
}

export default App;
