import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route element={ <App /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/sobre" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
