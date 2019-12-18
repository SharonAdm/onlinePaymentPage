const initialState = {
  cardNo: null,
  expYear: null,
  expMonth: null,
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

const numRegex = RegExp(/^[0-9]*$/);
const mailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARDNOCHANGE": {
      let value = "";

      if (action.value.legth < 16) {
        state.formErrors.cardNo = "شماره کارت نامعتبر ";
      }
      if (!numRegex.test(action.value)) {
        state.formErrors.cardNo = "شماره کارت نامعتبر ";
      } else {
        value = action.value;
      }
      return {
        ...state,
        cardNo: value
      };
    }

    case "YEARCHANGE": {
      let value = "";
      if (action.value.legth < 2) {
        state.formErrors.expDate = "تاریخ نامعتبر";
      }
      if (!numRegex.test(action.value)) {
        state.formErrors.expDate = "تاریخ نامعتبر";
      } else {
        value = action.value;
      }
      return {
        ...state,
        expYear: value
      };
    }

    case "MONTHCHANGE": {
      let value = "";
      let tempMonth = action.value;

      if (action.value.legth < 2) {
        state.formErrors.expDate = "تاریخ نامعتبر";
      }
      if (!numRegex.test(action.value)) {
        state.formErrors.expDate = "تاریخ نامعتبر";
      }
      if (tempMonth !== "01" || tempMonth !== "12") {
        state.formErrors.expDate = "تاریخ نامعتبر";
      } else {
        value = action.value;
      }
      return {
        ...state,
        expMonth: value
      };
    }

    case "EMAILCHANGE": {
      let value = "";
      if (mailRegex.test(action.value)) {
        value = action.value;
      } else {
        state.formErrors.emailAdd = "آدرس ایمیل نامعتبر";
      }
      return {
        ...state,
        emailAdd: value
      };
    }

    case "PASSCHANGE": {
      let value = "";
      if (action.value.legth < 5) {
        state.formErrors.pass = "رمز نامعتبر";
      } else {
        value = action.value;
      }
      return {
        ...state,
        pass: value
      };
    }

    case "SECURITYCHANGE": {
      let value = "";
      if (action.value.legth < 3) {
        state.formErrors.cvv2 = "نامعتبرcvv2";
      } else {
        value = action.value;
      }
      return {
        ...state,
        cvv2: value
      };
    }

    case "SUBMIT": {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export default reducer;
