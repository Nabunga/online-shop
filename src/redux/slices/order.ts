import { createSlice } from "@reduxjs/toolkit";

export interface orderState {
  activeTabIndex?: string;
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  cardNum: string;
  cardHolder: string;
  expirationMonth: string;
  expirationYear: string;
}

const initialState: orderState = {
  activeTabIndex: "1",
  firstName: '',
  lastName: '',
  tel: '',
  email: '',
  cardNum: '',
  cardHolder: '',
  expirationMonth: '',
  expirationYear: '',
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setActiveTabIndex: (state, action) => {
      state.activeTabIndex = action.payload
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setTel: (state, action) => {
      state.tel = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setCardNum: (state, action) => {
      state.cardNum = action.payload
    },
    setCardHolder: (state, action) => {
      state.cardHolder = action.payload
    },
    setExpirationMonth: (state, action) => {
      state.expirationMonth = action.payload
    },
    setExpirationYear: (state, action) => {
      state.expirationYear = action.payload
    },
  }
})

export const { setActiveTabIndex, setFirstName, setLastName, setTel, setEmail, setCardNum, setCardHolder, setExpirationMonth, setExpirationYear } = orderSlice.actions;

export default orderSlice.reducer;