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
const monthRegex = RegExp(/^0[1-9]|1[0-2]$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    if (val.length > 0) {
      valid = false;
    }
  });

  Object.values(rest).forEach(val => {
    if (val === null) {
      valid = false;
    }
  });

  return valid;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARDNOCHANGE": {
      action.event.preventDefault();

      if (action.value.length < 16 || !numRegex.test(action.value)) {
        let temp = Object.assign(state.formErrors, {
          cardNo: "شماره کارت نامعتبر "
        });
        return {
          ...state,
          formErrors: temp
        };
      } else {
        state.formErrors.cardNo = "";
        return {
          ...state,
          cardNo: action.value
        };
      }
    }

    case "YEARCHANGE": {
      action.event.preventDefault();

      if (action.value.length < 2 || !numRegex.test(action.value)) {
        let temp = Object.assign(state.formErrors, {
          expDate: "تاریخ نامعتبر"
        });
        return {
          ...state,
          formErrors: temp
        };
      } else {
        state.formErrors.expDate = "";
        return {
          ...state,
          expYear: action.value
        };
      }
    }

    case "MONTHCHANGE": {
      action.event.preventDefault();

      if (action.value.length < 2 || !monthRegex.test(action.value)) {
        let temp = Object.assign(state.formErrors, {
          expDate: "تاریخ نامعتبر"
        });
        return {
          ...state,
          formErrors: temp
        };
      } else {
        state.formErrors.expDate = "";
        return {
          ...state,
          expMonth: action.value
        };
      }
    }

    case "EMAILCHANGE": {
      action.event.preventDefault();

      if (mailRegex.test(action.value)) {
        state.formErrors.emailAdd = "";
        return {
          ...state,
          emailAdd: action.value
        };
      } else {
        let temp = Object.assign(state.formErrors, {
          emailAdd: "آدرس ایمیل نامعتبر"
        });
        return {
          ...state,
          formErrors: temp
        };
      }
    }

    case "PASSCHANGE": {
      action.event.preventDefault();

      if (action.value.length < 5) {
        let temp = Object.assign(state.formErrors, { pass: "رمز نامعتبر" });
        return {
          ...state,
          formErrors: temp
        };
      } else {
        state.formErrors.pass = "";
        return {
          ...state,
          pass: action.value
        };
      }
    }

    case "SECURITYCODECHANGE": {
      action.event.preventDefault();

      if (action.value.length < 3) {
        let temp = Object.assign(state.formErrors, { cvv2: "نامعتبرcvv2" });
        return {
          ...state,
          formErrors: temp
        };
      } else {
        state.formErrors.cvv2 = "";
        return {
          ...state,
          cvv2: action.value
        };
      }
    }

    case "SUBMIT":
      {
        action.event.preventDefault();
        if (formValid(state)) {
          alert("Form successfully submited");
        } else {
          alert("Form invalid");
          console.log(state);
        }
      }
      break;

    default:
      return state;
  }
};

export default reducer;
