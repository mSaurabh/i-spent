import { FCOLL } from "../../firebase/firebase.props";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import styles from "./Home.module.css";
import { TransactionForm } from "./TransactionForm";
import TransactionList from "./TransactionsList";

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const { user } = useAuthContext();

  const { documents, error } = useCollection(
    FCOLL.TRANSACTIONS,
    false,
    ["uid", "==", user!.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p className="error">{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user!.uid} />
      </div>
    </div>
  );
};

export default Home;
