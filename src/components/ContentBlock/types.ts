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
  id: string;
  direction: "left" | "right";
}
