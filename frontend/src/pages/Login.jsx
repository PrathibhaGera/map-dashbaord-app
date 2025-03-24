import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "../styles/Login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    isLoggedin: false,
    error: "",
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        { username: this.state.username, password: this.state.password },
        { withCredentials: true }
      );

      console.log("Login Successful:", response.data);
      localStorage.setItem("token", response.data.token);

      this.setState({ isLoggedin: true, error: "" });
    } catch (error) {
      console.error("Login Error:", error);
      this.setState({
        error:
          error.response?.data?.message ||
          "Server is unreachable. Try again later.",
      });
    }
  };

  render() {
    if (this.state.isLoggedin) {
      return <Navigate to="/dashboard" />;
    }

    return (
      <div className="login-container">
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          {this.state.error && (
            <p className="error-message">{this.state.error}</p>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
