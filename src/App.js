import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';

//styles
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/recipe/:id" element={<Recipe/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
