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

    const botToken = '7583528133:AAGsYAzoMPzbL472dCgSH6Cz8-0h3h8coYo';
    const chatId = '429954390';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await axios.post(url, {
        chat_id: chatId,
        text: `Имя: ${values.name}\nТелефон: ${values.phone}\nСообщение: ${values.message}`,
      });

      if (!response) {
        notification["error"]({
          message: "Error",
          description: "There was an error sending your message, please try again later.",
        });
      } else {
        event.target.reset();
        setFormState(() => ({
          values: { ...initialValues },
          errors: { ...initialValues },
        }));
    }} catch (error) {
      notification["error"]({
        message: "Error",
        description: "Failed to submit form. Please try again later.",
      });
    }

    // const url = "http://localhost:3000/send_form.php";
    //
    // try {
    //   if (Object.values(errors).every((error) => error === "")) {
    //     const response = await fetch(url, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(values),
    //     });
    //
    //     if (!response.ok) {
    //       notification["error"]({
    //         message: "Error",
    //         description: "There was an error sending your message, please try again later.",
    //       });
    //     } else {
    //       event.target.reset();
    //       setFormState(() => ({
    //         values: { ...initialValues },
    //         errors: { ...initialValues },
    //       }));
    //
    //       notification["success"]({
    //         message: "Success",
    //         description: "Your message has been sent!",
    //       });
    //     }
    //   }
    // } catch (error) {
    //   notification["error"]({
    //     message: "Error",
    //     description: "Failed to submit form. Please try again later.",
    //   });
    // }
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
