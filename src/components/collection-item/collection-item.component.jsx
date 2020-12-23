import React from "react";
import {connect} from 'react-redux';
import {
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    CollectionItemContainer,
    NameContainer, PriceContainer
} from "./collection-item.styles";
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
    const {price, name, imageUrl} = item;
    return(
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
})
export default connect(null, mapDispatchToProps)(CollectionItem);
