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
    this.props.history.push("/ship");
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    console.log(this.props);
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
