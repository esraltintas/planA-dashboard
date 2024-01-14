import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer}`} data-testid="footer">
      <p>Built for Plan A &copy;</p>
    </footer>
  );
};
