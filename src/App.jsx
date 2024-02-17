import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { 
    Route, RouterProvider,
    createBrowserRouter, 
    createRoutesFromElements
} from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const title = "TextUtils";
  const heading = "Enter some text to analyze below";

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.setAttribute('data-bs-theme', 'dark');
      showAlert("Dark mode has been enabled", "success");
    } else {
      setTheme('light');
      document.body.setAttribute('data-bs-theme', 'light');
      showAlert("Light mode has been enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" 
        element={
          <Navbar title={title} aboutText={"About " + title} theme={theme} toggleTheme={toggleTheme} />
        }
      >
        <Route path="/" element={<TextForm heading={heading} showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Alert alert={alert} />
    </>
  );
}

export default App;
