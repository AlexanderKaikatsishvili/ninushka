import './App.css';
import { WelcomePage } from './pages/WelcomePage.jsx';
import { PasswordPage } from './pages/PasswordPage.jsx';
import {HashRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/password" element={<PasswordPage />} />
          </Routes>
      </HashRouter>
  )
}

export default App
