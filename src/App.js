import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import ThemeSelector from './components/ThemeSelector';

//styles
import './App.css';
import { useTheme } from './hooks/useTheme';

function App() {
  const { mode } = useTheme()
  
  return (
    <div className={`App ${mode}`}>
    <BrowserRouter>
     <Navbar/>
     <ThemeSelector />
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
