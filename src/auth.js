const initialState = {
  isLoggedIn: false,
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case "TOGGLE_AUTH":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
}
