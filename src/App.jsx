import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      photo: "",
      bio: "",
      phoneNumber: "",
      password: ""
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
    this.changeBio = this.changeBio.bind(this);
    this.changePhoneNumber = this.changePhoneNumber.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }
  changeLastName(event) {
    this.setState({ lastName: event.target.value });
  }
  changeEmail(event) {
    this.setState({ email: event.target.value });
  }
  changePhoto(event) {
    this.setState({ photo: event.target.value });
  }
  changeBio(event) {
    this.setState({ bio: event.target.value });
  }
  changePhoneNumber(event) {
    this.setState({ phoneNumber: event.target.value });
  }
  changePassword(event) {
    this.setState({ password: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const register = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      photo: this.state.photo,
      bio: this.state.bio,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password
    };
    axios
      .post("http://localhost:4000/api/signup", register)
      .then((response) => console.log(response.data));

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      photo: "",
      bio: "",
      phoneNumber: "",
      password: ""
    });
  }

  render() {
    return (
      <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={this.changeFirstName}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={this.changeLastName}
              value={this.state.lastName}
            />
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={this.changeEmail}
              value={this.state.email}
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              onChange={this.changePhoto}
              value={this.state.photo}
            />
            <input
              type="text"
              name="bio"
              placeholder="Bio"
              onChange={this.changeBio}
              value={this.state.bio}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              onChange={this.changePhoneNumber}
              value={this.state.phoneNumber}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.changePassword}
              value={this.state.password}
            />

            <input type="submit" name="signup_submit" value="Sign me up" />
          </form>
        </div>

        <div class="right">
          <span class="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div>
      </div>
    );
  }
}

export default App;
