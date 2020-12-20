import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from "../../redux/shop/shop.selectors";

const CollectionPage = ({collection}) => {
    return (
        collection.items.map(item =>
            <div key={item.id}>
                <h1>{collection.title}</h1>
                <div>{item.name}</div>
                <div>{item.imageUrl}</div>
                <div>{item.price}</div>
                <div>{item.id}</div>
            </div>
        )
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);