import React, { Component } from "react";
import { Route } from "react-router";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";

import css from "./style.module.css";

export default class ShippingPage extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);

    let price = 0;
    const ingredients = {};
    for (let param of query.entries()) {
        if(param[0] !== "dun"){
            ingredients[param[0]] = param[1];
        }else{
            price = param[1];
        }
    }
    this.setState({ ingredients, price });
  }

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
          <strong>Дүн : {this.state.price}</strong>
        </p>
        <Burger orts={this.state.ingredients} />
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
        <Route exact path="/ship/contact" > 
            <ContactData ingredients={this.state.ingredients} price={this.state.price} />
        </Route>
        {/* <Route exact path="/ship/contact" render={() => (
            <ContactData ingredients={this.state.ingredients} price={this.state.price} />
        )} />  */}
      </div>
    );
  }
}
