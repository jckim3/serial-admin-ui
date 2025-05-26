import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import CreateSerial from './pages/CreateSerial';
import SerialList from './pages/SerialList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <header className="nav-bar">
          <NavLink to="/" className="nav-link">Create Serial</NavLink>
          <NavLink to="/list" className="nav-link">View Serials</NavLink>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<CreateSerial />} />
            <Route path="/list" element={<SerialList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
