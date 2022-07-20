import { Animation } from "./icons/Animation";
import { Business } from "./icons/Business";
import { Crypto } from "./icons/Crypto";
import { Design } from "./icons/Design";
import { Photography } from "./icons/Photography";

export const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "animation":
      return <Animation />;
    case "design":
      return <Design />;
    case "photography":
      return <Photography />;
    case "crypto":
      return <Crypto />;
    case "business":
      return <Business />;
    default:
      return <div>{"No icon found :("}</div>;
  }
};
