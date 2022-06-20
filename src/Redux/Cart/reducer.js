import {ADD_TO_CART} from "./actionTypes"


const initState = {
    cart : [],
}


const cartReducer = (state=initState, action) => {
    const {type, payload} = action

    switch(type){
        case ADD_TO_CART : 
            //let's check in the cart if the same product is present
            const isPresent = state.cart.find((prod) => {
                return prod.id === payload.id && prod.size === payload.size
            })

            
            let newCart
            //if present - we'll increase the quantity
            if(isPresent){
                newCart = state.cart.map((prod) => {
                    if(prod.id === payload.id && prod.size === payload.size){
                        return {...prod, qty : prod.qty + 1}
                    }
                    else{
                        return prod;
                    }
                })
            }
            else{
                let newPayload = {
                    ...payload,
                    qty : 1
                }
                newCart = [...state.cart,newPayload]
            }

            return {...state, cart : newCart}

        default : 
            return state;
    }
}

export {cartReducer}