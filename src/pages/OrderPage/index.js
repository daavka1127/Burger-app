import React, { Component } from "react";

import css from "./style.module.css";
import axios from "../../axis-order";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

class OrderPage extends Component{

    state = {
        orders: [],
        loading: false
    }

    componentDidMount(){
        this.setState({ loading: true });
        axios.get('/orders.json').then(response => {
            this.setState({orders: Object.entries(response.data).reverse()});
      
          })
          .catch(err => console.log(err))
          .finally(() => {
            this.setState({ loading: false });
          });
    }

    render(){
        // console.log(this.state.orders);
        return <div>
            {this.state.loading ? (
                <Spinner dada={this.setState.orders} />
            ) : (
                this.state.orders.map(el => <Order key={el[0]} order={el[1]} />)
            )}
        </div>;
    }
}

export default OrderPage;