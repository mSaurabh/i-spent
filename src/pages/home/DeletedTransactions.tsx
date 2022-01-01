import { ITransactions } from "../../context/DataInterfaces";
import { FCOLL } from "../../firebase/firebase.props";
// components
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
// styles
import styles from "./Home.module.css";

export interface DeletedTransactions {}
export const DeletedTransactions = (props: DeletedTransactions) => {
  const { user } = useAuthContext();

  const { hardDelete, restoreDocument, response } = useFirestore(
    FCOLL.TRANSACTIONS
  );
  const {
    documents: transactions,
    error,
  }: { documents: ITransactions[]; error: string } = useCollection(
    FCOLL.TRANSACTIONS,
    true,
    ["uid", "==", user!.uid],
    ["createdAt", "desc"]
  );

  return (
    <ul className={styles["deleted-transactions"]}>
      <h3 style={{ color: "crimson" }}>Deleted Transactions</h3>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
            <button onClick={() => hardDelete(transaction.id)}>x</button>
            <button
              className={styles.restore}
              onClick={() => restoreDocument(transaction.id)}
            >
              Restore
            </button>
          </li>
        ))
      ) : (
        <p>Nothing here</p>
      )}
    </ul>
  );
};
