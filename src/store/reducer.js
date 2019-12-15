const initialState = {
  cardNo: null,
  expDate: null,
  pass: null,
  cvv2: null,
  emailAdd: null,

  formErrors: {
    cardNo: "",
    expDate: "",
    pass: "",
    cvv2: "",
    emailAdd: ""
  }
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
