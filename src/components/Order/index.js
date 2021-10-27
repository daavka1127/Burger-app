import React from 'react'

import css from "./style.module.css"

export default function Order(props) {
    console.log(props.order)
    return (
        <div className={css.Order}>
            <p>
                Орц: Гахайн мах: {props.order.ingredients.bacon}, Салад : {props.order.ingredients.salad},
                Бяслаг : {props.order.ingredients.cheese}, Үхрийн мах : {props.order.ingredients.meat},
            </p>
            <p>Хаяг : {props.order.hayg.name} | {props.order.hayg.city} | {props.order.hayg.street}</p>
            <p>Үнийн дүн : <strong>{props.order.dun}</strong></p>
        </div>
    )
}
