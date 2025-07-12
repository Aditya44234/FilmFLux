// import logo from './logo.svg';
// import MovieCard from './components/MovieCard';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Favorite from './pages/Favorite';
import Home from './pages/Home';

function App(){
  return (
    <>
      <Navbar/>
      
      <main className="main-content ">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/favorite' element={<Favorite/>}></Route>
        </Routes>
      </main>

      <Footer/>
    </>
  );
}

export default App;
