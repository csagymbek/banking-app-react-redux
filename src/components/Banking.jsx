import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteAccount,
  deposit,
  interest,
  withdraw,
  changeAccountType,
} from "../banking";

export const Banking = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleDeposit = () => dispatch(deposit(amount));

  const handleWithdraw = () => dispatch(withdraw(amount));

  const handleInterest = () => dispatch(interest());

  const handleDelete = () => dispatch(deleteAccount());

  const handleChange = () => dispatch(changeAccountType());

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleDeposit}>
        Deposit
      </button>
      <button className="btn btn-primary" onClick={handleWithdraw}>
        Withdraw
      </button>
      <button className="btn btn-warning" onClick={handleInterest}>
        Interest
      </button>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-secondary" onClick={handleChange}>
        Change Account Type
      </button>
    </div>
  );
};
