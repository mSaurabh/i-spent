import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FCOLL } from "../../firebase/firebase.props";
import { useFirestore } from "../../hooks/useFirestore";
interface TransactionFormProps {
  uid: string;
}

export const TransactionForm = (props: TransactionFormProps) => {
  // props
  const { uid } = props;
  const navigate = useNavigate();
  // states
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [disableFields, setDisableFields] = useState(false);
  const { response, addDocument } = useFirestore(FCOLL.TRANSACTIONS);

  // functions
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addDocument({ name, amount, uid });
  };

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setAmount("");
      setName("");
    }
  }, [response.success]);

  // disable fields while adding transaction
  useEffect(() => {
    if (response.isPending) {
      setDisableFields(true);
    } else {
      setDisableFields(false);
    }
  }, [response.isPending]);
  // render
  return (
    <>
      <h3>Add a transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name:</span>
          <input
            type="text"
            required
            disabled={disableFields}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            required
            disabled={disableFields}
            onChange={(e) => setAmount(e.target.value.toString())}
            value={amount}
          />
        </label>
        <button disabled={disableFields}>
          {disableFields ? "Adding..." : "Add Transaction"}
        </button>
      </form>
    </>
  );
};
