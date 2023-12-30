import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      name: "",
      email: "",
    };
  }

  processDonation = () => {
    const { amount, name, email } = this.state;

    // Validate data (you may want to add more validation)
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Simulate processing (you would typically send this data to a server)
    alert(
      `Thank you, ${name}! Your donation of $${amount} has been received. Confirmation email sent to ${email}.`
    );

    // Reset the form
    this.setState({
      amount: "",
      name: "",
      email: "",
    });
  };

  render() {
    return (
      <>
        <Header />
        <h1>Donation Page</h1>

        <form id="donation-form">
          <label htmlFor="amount">Donation Amount ($):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="1"
            step="any"
            required
            value={this.state.amount}
            onChange={(e) => this.setState({ amount: e.target.value })}
          />

          <br />

          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />

          <br />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <br />

          <button type="button" onClick={this.processDonation}>
            Submit Donation
          </button>
        </form>

        <Footer />
      </>
    );
  }
}

// eslint-disable-next-line no-undef
export default Introduction
