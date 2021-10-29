import React, { Component } from "react";
import { Route } from "react-router";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";

import css from "./style.module.css";

export default class ShippingPage extends Component{
    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            bacon: 1,
            meat: 1
        }
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        
        const ingredients = {};
        for(let param of query.entries()){
            ingredients[param[0]] = param[1];
        }
        this.setState({ingredients});
    }

    goBack = () =>{
        this.props.history.goBack();
    }

    showContactData = () =>{
        this.props.history.push('/ship/contact');
    }

    render(){
        return <div className={css.ShippingPage}>
            <p style={{fontSize: "24px"}}><strong>Таны захиалга амттай болно гэж найдаж байна...</strong></p>
            <Burger orts={this.state.ingredients} />
            <Button daragdsan={this.goBack} btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" />
            <Button daragdsan={this.showContactData} btnType="Success" text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ" />
            <Route exact path="/ship/contact" component={ContactData} />
        </div>;
    }
}