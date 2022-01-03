import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import Toastify from "../toast/Toastify";

class ValidateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataField: {
        registerUsername: "",
        registerPassword: "",
        registerPhone: "",
        registerEmail: "",
      },
      errorField: {
        registerUsername: "",
        registerPassword: "",
        registerPhone: "",
        registerEmail: "",
      },
    };
  }

  onHanldeChange = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;

    let dataFieldClone = { ...this.state.dataField };
    dataFieldClone[targetName] = targetValue;
    this.setState({
      dataField: dataFieldClone,
    });

    // console.log("name", e.target.name);
    // console.log("value", e.target.value);
  };

  checkEmail = (email) => {
    return /^[a-zA-Z][a-zA-Z0-9_\.]{1,32}@[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,4}){1,2}$/.test(
      email
    );
  };

  checkPhoneNumValid = (phoneNumber) => {
    const re = /^[0-9]*$/;
    return re.test(phoneNumber);
  };

  onSubmitForm = () => {
    console.log("dataField", this.state.dataField);
    let flag = this.handleFormValidate();
    if (flag.isEmpty === false && flag.isValid === true) {
      Toastify.success("thành công", "binh");
    } else {
      let focus = document.getElementById(flag.fieldError);
      let dataFieldArr = Object.keys({ ...this.state.dataField });

      if (focus) {
        focus.focus();
      }

      if (flag.isEmpty === true) {
        for (let i = 0; i < dataFieldArr.length; i++) {
          if (dataFieldArr[i] === flag.fieldError) {
            let tempError = {
              registerUsername: "",
              registerPassword: "",
              registerPhone: "",
              registerEmail: "",
            };
            tempError[flag.fieldError] = "Trường này không được để trống";
            this.setState({ errorField: tempError });
            break;
          }
        }
      }

      if (flag.isValid === false) {
        for (let i = 0; i < dataFieldArr.length; i++) {
          if (dataFieldArr[i] === flag.fieldError) {
            let tempError = {
              registerUsername: "",
              registerPassword: "",
              registerPhone: "",
              registerEmail: "",
            };
            tempError[flag.fieldError] = "Trường này không phải Email";
            this.setState({ errorField: tempError });
            break;
          }
        }
      }
    }
  };

  handleFormValidate = () => {
    const { dataField } = this.state;
    let isEmpty = false;
    let fieldError = "";
    let isValid = true;

    let dataFieldArr = Object.keys(dataField);
    for (let i = 0; i < dataFieldArr.length; i++) {
      if (dataField[dataFieldArr[i]] === "") {
        fieldError = dataFieldArr[i];
        isEmpty = true;
        break;
      }
    }

    if (isEmpty === false) {
      isValid = this.checkEmail(dataField.registerEmail);
      fieldError = !isValid ? "registerEmail" : "";
    }

    return {
      isEmpty,
      isValid,
      fieldError,
    };
  };

  render() {
    let { dataField, errorField } = this.state;
    return (
      <div className="form-normal">
        <div className="form-body">
          <div className="custom-control-form">
            <label>Usename</label>
            <div className="custom-input">
              <input
                id="registerUsername"
                type="text"
                name="registerUsername"
                onChange={this.onHanldeChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 error">
            {errorField && errorField.registerUsername}
          </div>
          <div className="custom-control-form">
            <label>Password</label>
            <div className="custom-input">
              <input
                id="registerPassword"
                type="password"
                name="registerPassword"
                onChange={this.onHanldeChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 error">
            {errorField && errorField.registerPassword}
          </div>
          <div className="custom-control-form">
            <label>Số điện thoại</label>
            <div className="custom-input">
              <input
                id="registerPhone"
                type="text"
                name="registerPhone"
                onChange={this.onHanldeChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 error">
            {errorField && errorField.registerPhone}
          </div>
          <div className="custom-control-form">
            <label>Email</label>
            <div className="custom-input">
              <input
                id="registerEmail"
                type="text"
                name="registerEmail"
                onChange={this.onHanldeChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 error">
            {errorField && errorField.registerEmail}
          </div>
          <div className="btn-submit">
            <button onClick={this.onSubmitForm}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ValidateForm;
