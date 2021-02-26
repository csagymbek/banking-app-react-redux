const initialState = {
  balance: 0,
  isSavingsAccount: false,
};

export default function bankingReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + payload };
    case "WITHDRAW":
      return { ...state, balance: state.balance - payload };
    case "INTEREST":
      return { ...state, balance: state.balance * 1.03 };
    case "DELETE":
      return { ...state, balance: state.balance * 0 };
    case "CHANGE_TYPE":
      return { ...state, isSavingsAccount: !state.isSavingsAccount };
    default:
      return state;
  }
}

export const deposit = (amount) => ({
  type: "DEPOSIT",
  payload: parseInt(amount),
});

export const withdraw = (amount) => ({
  type: "WITHDRAW",
  payload: parseInt(amount),
});

export const interest = () => ({ type: "INTEREST" });

export const deleteAccount = () => ({ type: "DELETE" });

export const changeAccountType = () => ({ type: "CHANGE_TYPE" });
