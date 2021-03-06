export default function (state = {}, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, login: action.payload };
    case "USER_AUTH":
      return { ...state, login: action.payload };
    case "REGISTER":
      return { ...state, newuser: action.payload };
    case "CLEAR_NEWUSER":
      return { ...state, newuser: action.payload };
    default:
      return state;
  }
}
