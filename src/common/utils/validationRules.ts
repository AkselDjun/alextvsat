import { validateProps } from "../types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Имя обязательно";
  }
  if (!values.phone) {
    errors.phone = "Номер телефона обязателен";
  } else if (!/^\+375\d{9}$/.test(values.phone)) {
    errors.phone = "Некорректный номер телефона";
  }
  return errors;
}
