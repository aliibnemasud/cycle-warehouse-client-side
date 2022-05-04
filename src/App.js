import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
