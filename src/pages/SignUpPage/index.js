import React, { Component } from "react";
import css from "./style.module.css";

import Button from "../../components/General/Button";
import * as actions from "../../redux/actions/signUpActions";
import { connect } from "react-redux";

class SignUp extends Component {
    state = {
        email: '',
        password1: '',
        password2: '',
        error: ''
    };

    changeEmail = (event) =>{
        this.setState({
            email: event.target.value
        });
    };

    changePassword1 = (event) =>{
        this.setState({
            password1: event.target.value
        });
    };

    changePassword2 = (event) =>{
        this.setState({
            password2: event.target.value
        });
    };

    signup = () =>{
        if(this.state.password1 === this.state.password2){
            console.log("Signed up");
            this.setState({error: ""});
            this.props.signupUser(this.state);
        }else{
            this.setState({error: "Нууц үг хоорондоо таарахгүй байна."});
        }
    };

    render() {
        return (
            <div className={css.Signup}>
                <h1>Бүртгэлийн форм</h1>
                <div>Та өөрийн мэдээллээ оруулна уу.</div>
                <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг"/>
                <input onChange={this.changePassword1} type="password" placeholder="Нууц үгээ оруулна уу"/>
                <input onChange={this.changePassword2} type="password" placeholder="Нууц үгээ давтан оруулна уу"/>
                {this.state.error && <div style={{color:'red'}}>{this.state.error}</div>}
                <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan={this.signup} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signupUser: (state) => dispatch(actions.signupUser(state))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);