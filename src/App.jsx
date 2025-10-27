import './App.css';
import './assets/styles/main.scss';
import { WelcomePage } from './pages/WelcomePage.jsx';
import { PasswordPage } from './pages/PasswordPage.jsx';
import {MessagePage} from "./pages/MessagePage";
import {HashRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/password" element={<PasswordPage />} />
              <Route path="/message" element={<MessagePage />} />
          </Routes>
      </HashRouter>
  )
}

export default App
