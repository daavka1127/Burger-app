import axios from "../../axis-order";

export const loadOrders = () =>{
    return function(dispatch){
        dispatch(loadOrderStart());

        axios.get('/orders.json').then(response => {
            const loadedOrders = Object.entries(response.data).reverse();
            dispatch(loadOrderSuccess(loadedOrders));   
        })
        .catch(err => dispatch(loadOrderError(err)));
    }
}

export const loadOrderStart = () =>{    
    return{
        type: "LOAD_ORDERS_START"
    }
}

export const loadOrderSuccess = (loadedOrders) =>{
    return{
        type: "LOAD_ORDERS_SUCCESS",
        orders: loadedOrders
    }
}

export const loadOrderError = (error) =>{
    return{
        type: "LOAD_ORDERS_ERROR",
        error
    }
}


// ORDER хадгалах хэсэг
export const saveOrder = (newOrder) => {
    return function(dispatch){
        dispatch(saveOrderStart());

        axios.post("/orders.json", newOrder)
        .then(response =>{
            dispatch(saveOrderSuccess());
            alert("Amjilttai hadgallaa");
        })
        .catch(error => {
            dispatch(saveOrderError(error));
        });
    }
}

export const saveOrderStart = () => {
    return{
        type: "SAVE_ORDER_START"
    }
}

export const saveOrderSuccess = () => {
    return{
        type: "SAVE_ORDER_SUCCESS"
    }
}

export const saveOrderError = (error) => {
    return{
        type: "SAVE_ORDER_ERROR",
        error
    }
}