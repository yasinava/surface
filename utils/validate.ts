import { UserType, ValidateErrorType } from "./type";

export const Validate = (data: UserType, type: string) => {
  const errors: ValidateErrorType = {};
  if (type === "login") {
    if (!data.email) {
      errors.email = "Please enter email";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "your email invalid";
    } else {
      delete errors.email;
    }
    if (!data.password) {
      errors.password = "please enter password";
    } else if (data.password[0].length < 6) {
      errors.password = "Password need to be 6 character or more";
    } else {
      delete errors.password;
    }
  }
  if (type === "register") {
    if (!data.email) {
      errors.email = "Please enter email";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "your email invalid";
    } else {
      delete errors.email;
    }
    if (!data.password) {
      errors.password = "please enter password";
    } else if (data.password[0].length < 6) {
      errors.password = "Password need to be 6 character or more";
    } else {
      delete errors.password;
    }
    if (!data.firstName) {
      errors.firstName = "Enter your firstName";
    } else {
      delete errors.firstName;
    }
    if (!data.lastName) {
      errors.lastName = "Enter your lastName";
    } else {
      delete errors.lastName;
    }
    if (!data.birthDay) {
      errors.birthDay = "enter your birthday";
    } else {
      delete errors.birthDay;
    }
    if (!data.phoneNumber) {
      errors.phoneNumber = "we need your phoneNumber";
    } else if (data.phoneNumber.toString().length < 11) {
      errors.phoneNumber = "your phone number is not true";
    } else {
      delete errors.phoneNumber;
    }
    if (!data.address) {
      errors.address = "please enter address";
    } else {
      delete errors.address;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "please confirm Password";
    }
    if (data.password && data.confirmPassword) {
      if (data.confirmPassword[0] !== data.password[0]) {
        errors.confirmPassword = "its not true :)";
      } else {
        delete errors.confirmPassword;
      }
    }
  }

  return errors;
};
