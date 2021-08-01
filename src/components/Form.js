import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      desc: "",
      gender: 0,
      language: "vi",
      chkbStatus: true,
      showPass: false,
    };
  }

  toggetOpenPassword = (e) => {
    e.preventDefault();
    this.setState({
      showPass: !this.state.showPass,
    });
  };

  onHandleChange = (e) => {
    var target = e.target;
    var name = target.name;
    // var value = target.value ;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { username, password, desc, gender, language, chkbStatus, showPass } =
      this.state;
    return (
      <div class="container">
        <div class="row">
          <div class="panel panel-default">
            <div class="panel-body">
              <form>
                <legend>Form title</legend>
                <div class="form-group">
                  <label for="">username</label>
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Name"
                    name="username"
                    value={username}
                    onChange={this.onHandleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="">password</label>
                  <input
                    // type="password"
                    type={showPass ? "text" : "password"}
                    class="form-control"
                    id=""
                    name="password"
                    value={password}
                    onChange={this.onHandleChange}
                  />

                  <button onClick={this.toggetOpenPassword}>
                    <i class="fab fa-accessible-icon"></i>
                  </button>
                </div>
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea
                    class="form-control"
                    row="3"
                    name="desc"
                    value={desc}
                    onChange={this.onHandleChange}
                  />
                </div>
                <label>Giới tính</label>
                <select
                  class="form-control"
                  name="gender"
                  value={gender}
                  onChange={this.onHandleChange}
                >
                  <option vale={0}>Nữ</option>
                  <option value={1}>Nam</option>
                </select>
                <label>Ngôn ngữ</label>
                <div class="radio">
                  <label>
                    Tiếng anh
                    <input
                      type="radio"
                      class="form-control"
                      name="language"
                      value="en"
                      onChange={this.onHandleChange}
                      checked={language === "en"}
                    />
                  </label>
                  <label>
                    Tiếng việt
                    <input
                      type="radio"
                      class="form-control"
                      name="language"
                      value="vi"
                      onChange={this.onHandleChange}
                      checked={language === "vi"}
                    />
                  </label>
                </div>
                <label>Trạng thái</label>
                <div class="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="chkbStatus"
                      value={true}
                      onChange={this.onHandleChange}
                      checked={chkbStatus}
                    ></input>
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={this.onSubmit}
                >
                  Lưu lại
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
