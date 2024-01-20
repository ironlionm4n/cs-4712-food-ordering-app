import Menu from "../Menu/Menu";
import Title from "../Title/Title";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Title />
      <Menu />
    </div>
  );
};

export default Home;
