import React, { FC } from "react";
import UserInfo from "./UserInfo/UserInfo";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import Delivery from "./Delivery/Delivery";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setActiveTabIndex } from "../../redux/slices/order";
import './OrderPage.scss';

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const { activeTabIndex, firstName, lastName, tel, email } = useAppSelector(state => state.order);

  const clickTabHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLLIElement;
    let getId = target.id;
    dispatch(setActiveTabIndex(getId));
  }

  const calculateUserInfoStyleLink = () => {
    return activeTabIndex === "1" ? "order__nav-links active-link" : "order__nav-links" 
  }

  // const calculatePaymentStyleLink = () => {
  //   if (firstName && lastName && tel && email && activeTabIndex === "2") {
  //     return "order__nav-links active-link"
  //   } else if (firstName && lastName && tel && email) {
  //     return "order__nav-links"
  //   } else {
  //     return "order__nav-links link-disable"
  //   }
  // }

  return (
    <div className="order__wrapper">

      <nav>
        <ul className="order__list-links">
          <li className={calculateUserInfoStyleLink()} id="1" onClick={clickTabHandler}>
            User info
          </li>
          <li className="order__nav-links" id="2" onClick={clickTabHandler}>
            Payment details
          </li>
          <li className={activeTabIndex === "3" ? "order__nav-links active-link" : "order__nav-links"} id="3" onClick={clickTabHandler}>
            Delivery
          </li>
        </ul>
      </nav>

      <div className="order__content">
        <div className="order__current-tab-content">
          {activeTabIndex === "1" && <UserInfo />}
          {activeTabIndex === "2" && <PaymentDetails />}
          {activeTabIndex === "3" && <Delivery />}
        </div>
        <div className="order__info">
          <h2 className="order__info-header">Order info</h2>
          {firstName && <p className="order__info-item">First name: {firstName}</p>}
          {lastName && <p className="order__info-item">Last name: {lastName}</p>}
          {tel && <p className="order__info-item">Tel: {tel}</p>}
          {email && <p className="order__info-item">Email: {email}</p>}
        </div>
        
      </div>
      

    </div>
  )
}

export default OrderPage;