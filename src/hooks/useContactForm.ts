import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

export interface ContactValues {
  name: string;
  phone: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

type Status = "idle" | "sending" | "success" | "error";

const initialValues: ContactValues = { name: "", phone: "", message: "" };

const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

export const normalizePhone = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  if (/^375\d{9}$/.test(digits)) return `+${digits}`;
  if (/^80\d{9}$/.test(digits)) return `+375${digits.slice(2)}`;
  if (/^\d{9}$/.test(digits)) return `+375${digits}`;
  return null;
};

export const validate = (values: ContactValues): ContactErrors => {
  const errors: ContactErrors = {};
  if (!values.name.trim()) {
    errors.name = "Укажите, как к вам обращаться";
  }
  if (!values.phone.trim()) {
    errors.phone = "Укажите номер телефона";
  } else if (!normalizePhone(values.phone)) {
    errors.phone = "Номер в формате +375 29 123-45-67";
  }
  return errors;
};

export const useContactForm = () => {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      if (!botToken || !chatId) throw new Error("Telegram is not configured");
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `Имя: ${values.name.trim()}\nТелефон: ${normalizePhone(values.phone)}\nСообщение: ${values.message.trim() || "—"}`,
      });
      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return { values, errors, status, handleChange, handleSubmit };
};
