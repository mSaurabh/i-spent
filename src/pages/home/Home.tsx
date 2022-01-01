import { useEffect, useState } from "react";
// interfaces & enums
import { ITransactions } from "../../context/DataInterfaces";
import { FCOLL } from "../../firebase/firebase.props";
// hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
// styles
import styles from "./Home.module.css";
// components
import { TransactionForm } from "./TransactionForm";
import { TransactionList } from "./TransactionsList";

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const { user } = useAuthContext();
  const [total, setTotal] = useState("");

  const { documents, error }: { documents: ITransactions[]; error: string } =
    useCollection(
      FCOLL.TRANSACTIONS,
      false,
      ["uid", "==", user!.uid],
      ["createdAt", "desc"]
    );

  useEffect(() => {
    if (documents) {
      let totalExpense = 0;
      documents.forEach((d) => {
        totalExpense += parseInt(d.amount);
      });
      setTotal(totalExpense.toString());
    }
  }, [documents]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {<h3 className="total">Total Expense($): {total ? total : "0"}</h3>}
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
