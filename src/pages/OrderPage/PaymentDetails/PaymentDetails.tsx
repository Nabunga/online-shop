import React, { FC } from "react";
import VisaIcon from '../../../assets/logo/cc-visa-brands.svg';
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setCardNum, setExpirationMonth, setExpirationYear } from '../../../redux/slices/order';
import './PaymentDetails.scss';

const PaymentDetails: FC = () => {
  const dispatch = useAppDispatch();
  const { cardNum, expirationMonth, expirationYear, firstName, lastName } = useAppSelector(state => state.order)

  return (
    <div className="payment__container">

      <div className="visa-logo">
        <img 
          className="visa-logo__image" 
          src={VisaIcon} 
          alt="Visa logo" 
        />
      </div>

      <div className="payment__input-card-number">
        <input 
          className="input-base card-number" 
          value={cardNum}
          onChange={(e) => dispatch(setCardNum((e.target.value.replace(/[^0-9]/g, ''))))}
          type="text" 
          name="card-num" 
          placeholder="Enter card number" 
          maxLength={16} 
        />
      </div>

      <div className="payment__input-card-holder">

        <div className="input-card-holder__first-group">
          <input 
            className="input-base card-holder" 
            defaultValue={`${firstName} ${lastName}`} 
            type="text" 
            name="card-holder" 
            placeholder="Card holder"
          />
        </div>

        <div className="input-card-holder__second-group">
          <input 
            className="input-base expiration-month" 
            value={expirationMonth}
            onChange={(e) => dispatch(setExpirationMonth((e.target.value.replace(/[^0-9]/g, ''))))}
            type="text" 
            name="expiration-month" 
            placeholder="MM" 
            maxLength={2} 
          />
          <input 
            className="input-base expiration-year" 
            value={expirationYear}
            onChange={(e) => dispatch(setExpirationYear((e.target.value.replace(/[^0-9]/g, ''))))}
            type="text" 
            name="expiration-year" 
            placeholder="YY" 
            maxLength={2}
          />
        </div>

      </div>
    </div>
  )
}

export default PaymentDetails;