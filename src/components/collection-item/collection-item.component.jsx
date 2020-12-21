import React from "react";
import {connect} from 'react-redux';
import {
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    CollectionItemContainer,
    NameContainer, PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({item, addItem}) => {
    const {price, name, imageUrl} = item;
    return(
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
}
export default connect(null)(CollectionItem);
