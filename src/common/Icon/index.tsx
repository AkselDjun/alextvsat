import { IconProps } from "../types"

export const Icon = ({ src, style }: IconProps) => (
  <img src={`/img/icons/${src}.png`} alt={src} style={style} />
);
