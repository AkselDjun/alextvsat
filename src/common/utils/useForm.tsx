import { useState } from "react";
import { notification } from "antd";
import axios from "axios"

interface IValues {
  name: string;
  phone: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  phone: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    const botToken = '8049279705:AAH1AosUqnKSgYggJ1lMwM2eCo_FQk5kSis';
    const chatId = '630988677';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      if (Object.values(errors).every((error) => error === "")) {
      const response = await axios.post(url, {
        chat_id: chatId,
        text: `Имя: ${values.name}\nТелефон: ${values.phone}\nСообщение: ${values.message}`,
      });

      if (!response) {
        notification["error"]({
          message: "Ошибка",
          description: "При отправке сообщения произошла ошибка, повторите попытку позже.",
        });
      } else {
        event.target.reset();
        setFormState(() => ({
          values: { ...initialValues },
          errors: { ...initialValues },
        }));

        notification["success"]({
          message: "Успешно",
          description: "Ваше сообщение отправлено!",
        });
      }
    }} catch (error) {
      notification["error"]({
        message: "Ошибка",
        description: "Не удалось отправить форму. Пожалуйста, повторите попытку позже.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
