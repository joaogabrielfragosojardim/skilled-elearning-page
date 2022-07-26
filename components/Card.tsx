import { Icon } from "../assets/Icon";

interface IProps {
  children: React.ReactNode;
  background: string;
  icon?: string;
  shadow?: boolean;
  loading?: boolean;
}

export const Card = ({ children, background, icon, shadow }: IProps) => {
  return (
    <div
      style={{
        background: background,
        borderRadius: "15px",
        padding: "64px 32px 32px 32px",
        boxShadow: shadow
          ? "box-shadow: 0px 25px 50px rgba(6, 22, 141, 0.0442381)"
          : "",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        position: "relative",
      }}
    >
      {icon && (
        <div style={{ position: "absolute", top: "-25px" }}>
          <Icon name={icon} />
        </div>
      )}
      {children}
    </div>
  );
};
