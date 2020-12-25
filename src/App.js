import React, {Fragment, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import {checkUserSession, googleSignInStart, signOutStart} from "./redux/user/user.actions";
import Header from "./components/header/header.component";
import {GlobalStyle} from "./global.styles";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import PaypalCheckOut from "./components/paypal-checkout/paypal-checkout.component";
const App = ({currentUser,checkUserSession}) => {
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])
    return (
        <div>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage}/>
                <Route
                    exact
                    path="/sign-in"
                    render={() =>
                        currentUser ? <Redirect to="/"/> : <SignInAndSignUp/>
                    }
                />
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
