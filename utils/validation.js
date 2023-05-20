import { isValidPhoneNumber } from 'libphonenumber-js'

export const validatePhone = (value) => {
  return isValidPhoneNumber(value);
}

export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export const validateText = (value) => {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(value);
}
