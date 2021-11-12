import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";

import css from "./style.module.css";

class ShippingPage extends Component {

  cancelOrder = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong>Таны захиалга амттай болно гэж найдаж байна...</strong>
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>Дүн : {this.props.price}</strong>
        </p>
        <Burger />
        <Button
          daragdsan={this.cancelOrder}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />
        <Button
          daragdsan={this.showContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
        <Route path="/ship/contact" > 
            <ContactData />
        </Route>
        {/* <Route exact path="/ship/contact" render={() => (
            <ContactData ingredients={this.state.ingredients} price={this.state.price} />
        )} />  */}
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    price: state.totalPrice
  }
}

export default connect(mapStateToProps)(ShippingPage);