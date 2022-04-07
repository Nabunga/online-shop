import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import MainPage from "../pages/MainPage/MainPage";
import CartPage from '../pages/CartPage/CartPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import '../styles/reset.scss';
import './App.scss';
import { useAppSelector } from "../hooks/reduxHooks";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Modal from "./Modal/Modal";

const App = () => {
  const { cart } = useAppSelector(state => state.cart)
  const [active, setActive] = useState(false)

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
              <PrivateRoute cart={cart} path="/order" component={() => (<OrderPage setActive={setActive}/>)} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
          <Modal active={active} setActive={setActive}>
            <h2 className="modal__header">Congratulations!</h2>
            <p className="modal__text">Order has recieved</p>
            <button className="modal__btn" onClick={() => setActive(false)}>Awesome!</button>
          </Modal>
        </div>
      </Router>

    </>
  )
}

export default App;