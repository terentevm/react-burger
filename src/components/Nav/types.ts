import { MouseEventHandler } from "react";
import { TIconProps} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";

export type TNavItemProps = {
  text: string;
  Icon: ({ type }: TIconProps) => JSX.Element;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>
}