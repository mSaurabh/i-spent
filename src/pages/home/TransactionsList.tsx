import { ITransactions } from "../../context/DataInterfaces";
import { FCOLL } from "../../firebase/firebase.props";
import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";

interface TransactionListProps {
  transactions: any[];
}

export const TransactionList = (props: TransactionListProps) => {
  const { transactions }: { transactions: ITransactions[] } = props;
  const { deleteDocument, response } = useFirestore(FCOLL.TRANSACTIONS);
  //console.log(response);
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};
