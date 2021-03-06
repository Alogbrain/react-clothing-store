import React from "react";
import {connect} from "react-redux";
import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer,
    QuantityContainer, RemoveButtonContainer,
    TextContainer
} from "./cart-item.styles";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";

const CartItem = ({item, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = item;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name}/>
            <ItemDetailsContainer>
                <TextContainer>{name}</TextContainer>
                <QuantityContainer>
                    <div onClick={() => removeItem(item)}>&#10094;</div>
                    <span>{quantity}</span>
                    <div onClick={() => addItem(item)}>&#10095;</div>
                    <span> x {price}</span>
                </QuantityContainer>
            </ItemDetailsContainer>
            <RemoveButtonContainer onClick={() => clearItem(item)}>
                &#10005;
            </RemoveButtonContainer>
        </CartItemContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CartItem);
