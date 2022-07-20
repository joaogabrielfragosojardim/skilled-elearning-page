import { Button } from "./Button";
import { LogoLight } from "../assets/LogoLight";

export const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LogoLight width={112} height={28} />
        <Button text="Get Started" background="gradient-purple" />
      </div>
    </footer>
  );
};
