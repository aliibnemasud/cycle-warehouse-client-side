import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './componants/Blog/Blogs';
import Dashboard from './componants/Dashboard/Dashboard';
import Error from './componants/Error/Error';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import ProductDetails from './componants/Products/ProductDetails';
import RequireAuth from './componants/RequireAuth/RequireAuth';
import SignIn from './componants/signIn/SignIn';
import SignUp from './componants/Signup/SignUp';
import AddNewItem from './componants/Dashboard/AddNewItem/AddNewItem';
import ManageInventory from './componants/Dashboard/ManageInventory/ManageInventory';
import Inventory from './componants/Dashboard/Inventory/Inventory';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/manageinventory/addnewitem' element={<RequireAuth>
          <AddNewItem></AddNewItem>
          </RequireAuth>}></Route>
        <Route path='/manageinventory' element={
        <RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>  
        <Route path='/inventory/:productId' element={<RequireAuth><ProductDetails></ProductDetails></RequireAuth>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
        

          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            
            <Route index path='additem' element={<AddNewItem></AddNewItem>}></Route>
            <Route  path='manageinventory' element={<ManageInventory></ManageInventory>}></Route>
            <Route path='manageinventory/inventory/:productId' element={<ProductDetails></ProductDetails>}></Route>           

          </Route>

      </Routes>

      

      

      <Footer></Footer>
    </div>
  );
}

export default App;
