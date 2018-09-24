import React, { Component } from 'react';

export default class Signup extends Component {
  state = {
    email: "",
    password: ""
  }
  onSignup() {
  }
    onChange = e => {
      this.setState({
      [e.target.name]:e.target.value
    })
    }
  render () {
    return(
    <form>
      <label>
        Email:
        <input onChange={e => this.onChange(e)} type="text" name="email" />
      </label>
      <label>
        Password:
        <input onChange={e => this.onChange(e)} type="text" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}
