import React from "react";
import {withRouter} from "react-router-dom";
import {
    CartDropDownButton,
    CartDropDownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    TotalContainer
} from "./cart-dropdown.styles";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";
const CartDropDown = ({cartItems, total, history, dispatch}) =>(
    <CartDropDownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem item={cartItem}/>
                    ))
                ): (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )
            }
        </CartItemsContainer>
        <CartDropDownButton
            onClick={ () => {
                history.push("/checkout");
                dispatch(toggleCartHidden())
            }
        }>
            Go to checkout
        </CartDropDownButton>
        <TotalContainer>TOTAL: {total}</TotalContainer>
    </CartDropDownContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
})
export default withRouter(connect(mapStateToProps)(CartDropDown));
