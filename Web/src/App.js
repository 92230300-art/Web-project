import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';
import Home from './Pages/Home.js';
import Employees from './Pages/Employees.js';
import Animals from './Pages/Animals.js';
function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Employees' element={<Employees />} />
          <Route path='/Animals' element={<Animals />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;