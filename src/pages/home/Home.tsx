import styles from "./Home.module.css";
import { TransactionForm } from "./TransactionForm";

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
