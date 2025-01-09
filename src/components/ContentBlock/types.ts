import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        scrollTo: string,
        color?: undefined;
      }
    | {
        title: string;
        color: string;
        scrollTo: string,
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
