import React, { Component } from "react";
import { toast } from "react-toastify";

const TYPE_SUCCESS = "SUCCESS";
const TYPE_INFO = "INFO";
const TYPE_WARN = "WARN";
const TYPE_ERROR = "ERROR";

class Toastify extends Component {
  static success(title, message) {
    this.show(TYPE_SUCCESS, title, message);
  }

  static info(title, message) {
    this.show(TYPE_INFO, title, message);
  }

  static warn(title, message) {
    this.show(TYPE_WARN, title, message);
  }

  static error(title, message) {
    this.show(TYPE_ERROR, title, message);
  }

  static successRaw(title, message) {
    this.show(TYPE_SUCCESS, title, message, true);
  }

  static errorRaw(title, message, autoCloseDelay = 3000) {
    this.show(TYPE_ERROR, title, message, true, autoCloseDelay);
  }

  static show(type, title, message, rawMessage = false, autoCloseDelay = 3000) {
    const options = {
      position: toast.POSITION.BOTTOM_RIGHT,
      pauseOnHover: true,
      autoClose: autoCloseDelay,
    };

    switch (type) {
      case TYPE_SUCCESS:
        toast.success(title, options);
        break;
      case TYPE_INFO:
        toast.info(title, options);
        break;
      case TYPE_WARN:
        toast.warn(title, options);
        break;
      case TYPE_ERROR:
        toast.error(title, options);
        break;
      default:
        break;
    }
  }

  //   render() {
  //     return <div></div>;
  //   }
}

export default Toastify;
