import { TIconProps} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";

export type TMenuElementType = {
  text: string;
  icon: ({ type }: TIconProps) => JSX.Element;
  isActive: boolean;
  path: string;
}

export type TMenuType = TMenuElementType[];