import { Box, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setEmail, setFirstName, setLastName, setTel } from "../../../redux/slices/order";

import './UserInfo.scss';

const UserInfo: FC = () => {
  const dispatch = useAppDispatch();
  const { firstName, lastName, tel, email } = useAppSelector(state => state.order);

  const [errFirstName, setErrFirstName] = useState<boolean>(false);
  const [helperTextFirstName, setHelperTextFirstName] = useState<string>('');

  const [errLastName, setErrLastName] = useState<boolean>(false);
  const [helperTextLastName, setHelperTextLastName] = useState<string>('');

  const [errTel, setErrTel] = useState<boolean>(false);
  const [helperTextTel, setHelperTextTel] = useState<string>('');

  const [errEmail, setErrEmail] = useState<boolean>(false);
  const [helperTextEmail, setHelperTextEmail] = useState<string>('');

  const validateFirstName = () => {
    if (firstName === '') {
      setErrFirstName(true)
      setHelperTextFirstName("First name is too short")
    } else {
      setErrFirstName(false)
      setHelperTextFirstName("")
    }
  }
  const validateLastName = () => {
    if (lastName === '') {
      setErrLastName(true)
      setHelperTextLastName("Last name is too short")
    } else {
      setErrLastName(false)
      setHelperTextLastName("")
    }
  }
  const validateTel = () => {
    if (tel === '') {
      setErrTel(true)
      setHelperTextTel("Telephone number is too short")
    } else if (tel.length < 11) {
      setErrTel(true)
      setHelperTextTel("Value can't be less than 11 characters")
    } else if (tel.length > 12) {
      setErrTel(true)
      setHelperTextTel("Value can't be greater than 12 characters")
    } else {
      setErrTel(false)
      setHelperTextTel("")
    }
  }
  const validateEmail = () => {
    if (email === '') {
      setErrEmail(true)
      setHelperTextEmail("Email is too short")
    } else {
      setErrEmail(false)
      setHelperTextEmail("")
    }
  }
  
  return (
    <div className="user-info__container">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50%' },
        }}
        noValidate
        autoComplete="off"
      >

        <div>
          <TextField
            error={errFirstName}
            id="firstName"
            label="First name"
            value={firstName}
            onChange={(e) => dispatch(setFirstName(e.target.value))}
            onBlur={validateFirstName}
            helperText={helperTextFirstName}
          />
        </div>

        <div>
          <TextField
            error={errLastName}
            id="lastName"
            label="Last name"
            value={lastName}
            onChange={(e) => dispatch(setLastName(e.target.value))}
            onBlur={validateLastName}
            helperText={helperTextLastName}
          />
        </div>

        <div>
          <TextField
            error={errTel}
            id="tel"
            label="Telephone number"
            value={tel}
            onChange={(e) => dispatch(setTel(e.target.value))}
            onBlur={validateTel}
            helperText={helperTextTel}
          />
        </div>

        <div>
          <TextField
            error={errEmail}
            id="email"
            label="Email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            onBlur={validateEmail}
            helperText={helperTextEmail}
          />
        </div>

      </Box>
    </div>
  )
}

export default UserInfo;