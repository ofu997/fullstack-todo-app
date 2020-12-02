import React, { Component } from "react";
import { Button, TextField, Typography, Container } from "@material-ui/core";

export class LoginView extends Component {
  state = {
    username: "",
    password: "",
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleFormSubmit = async (event) => {
    // Login User
    event.preventDefault();

    await fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          this.props.history.push("/ddd");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container
        component="main"
        maxWidth="xs"
        style={{
          display: "flex",
          alignItems: "center",
          height: "75vh",
        }}
      >
        <div>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="" noValidate onSubmit={this.handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              onChange={this.handleUsernameChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className=""
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default LoginView;
