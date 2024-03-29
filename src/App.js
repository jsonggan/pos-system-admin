import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectLanguage from './pages/selectLanguage';
import Menu from './pages/menu';
import Login from './pages/auth/login';
import VerifyUser from './pages/auth/verifyUser';

/** 
 * @param {Object} props
 * @property {string} props.name - The name of the person as a string.
 * 
 */
function App(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<SelectLanguage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/verifyUser" element={<VerifyUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
