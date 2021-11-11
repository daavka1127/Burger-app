import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

import Spinner from "../../components/General/Spinner";

class BurgerPage extends Component {
  state = {
    purchasing: false,
    confirmOrder: false,
    lastCustomerName: "N/A",
    loading: false
  };

  componentDidMount = () => {
    
  }

  continueOrder = () => {
    

    const params = [];

    for(let orts in this.props.burgeriinOrts){
      params.push(orts + "=" + this.props.burgeriinOrts[orts]);
    }

    params.push("dun=" + this.props.niitUne);

    const query = params.join("&");
    console.log(this.props.history);

    this.props.history.push({
      pathname: "/ship",
      search: query
    });

    this.closeConfirmModal();
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (<Spinner />) : (<OrderSummary
            onCancel={this.closeConfirmModal}
            onContinue={this.continueOrder}
          />)
          }
        </Modal>
        <Burger />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
        />
      </div>
    );
  }
}



export default BurgerPage;
