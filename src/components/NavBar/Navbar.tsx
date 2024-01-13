import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Chart from "../../assets/images/chart.svg";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={`${styles.navbarWrapper}`}>
      <Link to="/?reports=1">
        <LazyLoadImage src={Chart} width={30} height={30} alt="Plan A Logo" />
      </Link>
    </div>
  );
};

export default NavBar;
