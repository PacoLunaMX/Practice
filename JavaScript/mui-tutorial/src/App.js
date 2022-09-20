import './App.css';
import AppBar from './components/AppBar'
import Home from './pages/Home';
import Tour from './pages/Tour';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter className="App">
      <AppBar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Tour />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
