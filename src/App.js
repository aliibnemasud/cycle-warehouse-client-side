import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './componants/Error/Error';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Inventory from './componants/Inventory/Inventory';
import RequireAuth from './componants/RequireAuth/RequireAuth';
import SignIn from './componants/signIn/SignIn';
import SignUp from './componants/Signup/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<Error></Error>}></Route>        
          <Route path='/inventory' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>        
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
