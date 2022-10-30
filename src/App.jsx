import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import { useState, useEffect} from "react";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/loginA";

const App = () => {

  const [admin, setAdmin] = useState('');  
  
  useEffect(()=>{
    
    const getStorage = async () =>{ 
       try{
        const res = await JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.isAdmin;
        setAdmin(res)
       }
       catch(err){
        console.log(err)
       }
    }

    getStorage();

  },[])

  return (
    <Router> 
      <Switch>         
        <Route path="/login">
          <Login/>
        </Route>
        {admin && (
          <>
          <Topbar/>
      <div className="container">
        <Sidebar/>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/products">
            <ProductList/>
          </Route>
          <Route path="/product/:productId">
            <Product/>
          </Route>
          <Route path="/newproduct">
            <NewProduct/>
          </Route>
        </div>
        </>)} 
      </Switch>
    </Router>
  );
}

export default App;
