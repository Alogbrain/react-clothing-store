import React from "react";
import {connect} from "react-redux"
import {CartContainer, ItemCountContainer, ShoppingIcon} from "./cart-icon.styles";
import {createStructuredSelector} from "reselect";
import {selectCartHidden, selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({cartItemsCount, toggleCartHidden}) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount,
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
