import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from "../pages/MainPage/MainPage";
import CartPage from '../pages/CartPage/CartPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import '../styles/reset.scss';
import './App.scss';

const App = () => {
  return (
    <>
      <Router>
        <div className="wrapper">
          <header>
            <Header />
          </header>
          <main className="main">
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/cart" component={CartPage} exact />
              <Route path="/order" component={OrderPage} exact />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  )
}

export default App;