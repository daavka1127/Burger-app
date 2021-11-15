import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderActions";

import Button from '../General/Button';

import css from "./style.module.css";
import axios from "../../axis-order";
import Spinner from '../General/Spinner';

import {withRouter} from "react-router-dom";

class ContactData extends Component {
    state ={
        city: null,
        name: null,
        street: null
    }

    componentDidUpdate(){
        if(this.props.newOrderStatus.finished && !this.props.newOrderStatus.error){
            this.props.history.replace("/orders");
        }
    }

    changeName = (e) =>{
        this.setState({name: e.target.value});
    }
    changeStreet = (e) =>{
        this.setState({street: e.target.value});
    }
    changeCity = (e) =>{
        this.setState({city: e.target.value});
    }
    saveOrder = () => {
        const newOrder = {
        ingredients: this.props.ingredients,
        dun: this.props.price,
        hayg:{
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }
        };
        console.log(newOrder);

        this.props.saveOrderAction(newOrder);
        // this.setState({loading: true});
        
    }
    render() {
        return (
            <div className={css.ContactData}>
                <div>
                    {this.props.newOrderStatus.error && `Захиалгыг хадгалах явцад алдаа гарлаа : ${this.props.newOrderStatus.error}`}
                </div>
                {this.props.newOrderStatus.saving ? <Spinner /> : (
                    <div>
                        <input onChange={this.changeName} type="text" name="name" placeholder="Таны нэр" />
                        <input onChange={this.changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг" />
                        <input onChange={this.changeCity} type="text" name="city" placeholder="Таны хот" />
                        <Button text="ЗАХИАЛГЫГ ИЛГЭЭХ" daragdsan={this.saveOrder} btnType="Success" />
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        ingredients: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice,
        newOrderStatus: state.orderReducer.newOrder
    }
}

const mapDispatchToProps = dispatch => {
    return{
        saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));