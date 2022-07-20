import { Button } from "./Button";
import { Logo } from "../assets/Logo";

export const Header = () => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo width={112} height={28} />
        <Button text="Get Started" background="simple" />
      </div>
    </header>
  );
};
