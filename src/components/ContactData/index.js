import React, { Component } from 'react';
import Button from '../General/Button';

import css from "./style.module.css";
import axios from "../../axis-order";
import Spinner from '../General/Spinner';

import {withRouter} from "react-router-dom";

class ContactData extends Component {
    state ={
        city: null,
        name: null,
        street: null,
        loading: false
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
        const order = {
        ingredients: this.props.ingredients,
        dun: this.props.price,
        hayg:{
            name: this.state.name,
            city: this.state.city,
            street: this.state.street
        }
        };
        this.setState({loading: true});
        axios.post("/orders.json", order)
        .then(response =>{
            alert("Amjilttai hadgallaa");
        })
        .catch(error => {
            alert("Aldaa garlaa: " + error);
        })
        .finally(() => {
            this.setState({loading: false});
            this.props.history.replace("/orders");
        });
        console.log("continue daragdlaa...");
    }
    render() {
        return (
            <div className={css.ContactData}>
                {this.state.loading ? <Spinner /> : (
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

export default withRouter(ContactData)