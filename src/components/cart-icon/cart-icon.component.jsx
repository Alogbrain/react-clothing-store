import React from "react";
import {connect} from "react-redux"
import {CartContainer, ItemCountContainer, ShoppingIcon} from "./cart-icon.styles";

const CartIcon = () => (
    <CartContainer>
        <ShoppingIcon/>
        <ItemCountContainer>1</ItemCountContainer>
    </CartContainer>
)
export default connect()(CartIcon);
