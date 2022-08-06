import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import {Routes,Route} from "react-router-dom"
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import Fav from './Pages/Fav/Fav';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='cart' element= {<Cart/>}> </Route>
        <Route path='fav' element= {<Fav/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
