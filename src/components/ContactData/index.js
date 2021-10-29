import React, { Component } from 'react';
import Button from '../General/Button';

import css from "./style.module.css";

export default class ContactData extends Component {
    state ={
        hayg:{
            city: null,
            name: null,
            street: null
        },
    }
    render() {
        return (
            <div className={css.ContactData}>
                <input type="text" name="name" placeholder="Таны нэр" />
                <input type="text" name="street" placeholder="Таны гэрийн хаяг" />
                <input type="text" name="city" placeholder="Таны хот" />
                <Button text="ЗАХИАЛГЫГ ИЛГЭЭХ" btnType="Success" />
            </div>
        )
    }
}
