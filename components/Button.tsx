import { constants } from "../constants/constants";

interface IProps {
  text: string;
  background: "simple" | "gradient-pink" | "gradient-purple";
}

export const Button = ({ text, background }: IProps) => {
  let backgroundColor;

  switch (background) {
    case "simple":
      backgroundColor = "#13183F";
      break;
    case "gradient-pink":
      backgroundColor = constants.pinkGradient;
      break;
    case "gradient-purple":
      backgroundColor = constants.blueGradient;
      break;
    default:
      backgroundColor = "#13183F";
  }

  return <button style={{ background: backgroundColor }}>{text}</button>;
};
