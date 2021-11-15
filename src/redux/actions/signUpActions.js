import axios from "axios";

export const signupUser = (state) =>{
    return function(dispatch){
        dispatch(signupUserStart());

        const email = state.email;
        const password = state. password1;
        const data = {
            email, 
            password,
            returnSecureToken: true
        };

        console.log(data);

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCARcu3wtCVB2tMoCkpd8paf9iNDiiWNLY', data)
        .then(response => {
            dispatch(signupUserSuccess(response.data));
        })
        .catch(err => {
            dispatch(signupUserError(err));
        });

        // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCARcu3wtCVB2tMoCkpd8paf9iNDiiWNLY

    }
};

export const signupUserStart = () =>{
    return {
        type: "SIGNUP_USER_START"
    };
};

export const signupUserSuccess = (firebaseResultData) =>{
    return {
        type: "SIGNUP_USER_SUCCESS",
        firebaseResultData
    };
};

export const signupUserError = (error) =>{
    return {
        type: "SIGNUP_USER_ERROR",
        error
    };
};