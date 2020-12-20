import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionPageContainer from "../collection/collection.container";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])
    return (
        <div>
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(
    null,
    mapDispatchToProps)
(ShopPage);