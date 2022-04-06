import { createSlice } from "@reduxjs/toolkit";

export interface orderState {
  activeTabIndex?: string;
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  cardNum: number | null;
  cardHolder: string | null;
  expirationMonth: number | null;
  expirationYear: number | null;
  cvv: number | null;
}

const initialState: orderState = {
  activeTabIndex: "1",
  firstName: '',
  lastName: '',
  tel: '',
  email: '',
  cardNum: null,
  cardHolder: null,
  expirationMonth: null,
  expirationYear: null,
  cvv: null
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
    setCvv: (state, action) => {
      state.cvv = action.payload
    },
  }
})

export const { setActiveTabIndex, setFirstName, setLastName, setTel, setEmail, setCardNum, setCardHolder, setExpirationMonth, setExpirationYear, setCvv } = orderSlice.actions;

export default orderSlice.reducer;