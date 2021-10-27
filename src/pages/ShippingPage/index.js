import React, { Component } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";

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

    render(){
        return <div>
            <Burger orts={this.state.ingredients} />
            <Button daragdsan={this.goBack} btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" />
        </div>;
    }
}