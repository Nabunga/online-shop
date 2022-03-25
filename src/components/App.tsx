import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from "../pages/MainPage/MainPage";
import CartPage from '../pages/CartPage';
import OrderPage from '../pages/OrderPage';
import Header from "./Header/Header";
import '../styles/reset.scss';

const App = () => {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/cart" component={CartPage} exact />
            <Route path="/order" component={OrderPage} exact />
          </Switch>
        </main>
      </Router>
    </>
  )
}

export default App;