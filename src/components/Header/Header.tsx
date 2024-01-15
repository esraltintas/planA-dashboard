import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Header.module.scss";
import PlanALogo from "../../assets/images/plana_logo.svg";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, react/function-component-definition
export default function Header() {
  return (
    <div className={`${styles.headerWrapper}`} data-testid="header">
      <Link to={"/"}>
        <LazyLoadImage
          src={PlanALogo}
          width={80}
          height={80}
          alt="Plan A Logo"
        />
      </Link>
    </div>
  );
}
