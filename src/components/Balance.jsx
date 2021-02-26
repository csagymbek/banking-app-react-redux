import React, { Component } from "react";
import { connect } from "react-redux";

export class Balance extends Component {
  render() {
    return (
      <div>
        <h1>{`$${this.props.balance.toFixed(2)}`}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ bankingReducer: { balance } }) => ({ balance });

export default connect(mapStateToProps)(Balance);
