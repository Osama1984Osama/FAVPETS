import React from "react";
import "./App.css";  
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Home from "./components/main-navbar/Home";
import Register from "./components/main-navbar/Register";
import About from "./components/main-navbar/About";
import Cats from "./components/main-navbar/gallery/Cats";
import Horses from "./components/main-navbar/gallery/Horses";
import Birds from "./components/main-navbar/gallery/Birds";
import Dogs from "./components/main-navbar/gallery/Dogs";
import Login from "./components/main-navbar/Login";
import AddContent from "./components/sidebar/AddContent";
import MyContent from "./components/sidebar/MyContent";
import Message from "./components/sidebar/Message";
import Favorite from "./components/sidebar/Favorite";
import Navbar from "./components/main-navbar/Navbar";
import Logout from "./components/main-navbar/Logout";
import Alerts from "./components/Alerts";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import Reset from "./components/main-navbar/Reset";
import NewPassword from "./components/main-navbar/NewPassword"; 
import UserProfile from "./components/sidebar/UserProfile";
import Health from './components/main-navbar/service/Health'
import  Praxis from './components/main-navbar/service/Praxis'
import Food from './components/main-navbar/service/Food'
import Details from "./components/products/details/Details";
import EditContent from "./components/sidebar/EditContent";





function App() {
  return (
    <div className="App">
      <AuthState>
        <AlertState>
          <BrowserRouter>
            <>
              <Navbar className="navbar navbar-expand-lg navbar-dark bg-info " />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route path="/" component={Home} exact />
                  
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/addContent" component={AddContent} />
                  <Route path="/myContent" component={MyContent} />
                  <Route path="/message" component={Message} />
                  <Route path="/favorite" component={Favorite} />
                  <Route path="/about" component={About} />
                  <Route path="/cats" component={Cats} />
                  <Route path="/dogs" component={Dogs} />
                  <Route path="/horses" component={Horses} />
                  <Route path="/birds" component={Birds} />
                  <Route path="/reset" component={Reset} />
                  <Route path="/newPassword/:token" component={NewPassword} />
                  <Route path="/userprofile" component={UserProfile} />
                  <Route path="/health" component={Health} />
                  <Route path="/praxis" component={Praxis} />
                  <Route path="/food" component={Food} />
                  <Route path="/details/:id" component={Details} />
                  <Route path="/editContent/:id" component={EditContent} />
                </Switch>
              </div>
             
            </>
          </BrowserRouter>
        </AlertState>
      </AuthState>
    </div>
  );
}

export default App;
