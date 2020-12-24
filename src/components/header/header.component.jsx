import React from "react"
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from "./header.styles";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {signOutStart} from "../../redux/user/user.actions";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, signOutStart, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {
                currentUser ? (
                    <OptionLink as="div" onClick={signOutStart}>SIGN OUT</OptionLink>
                ) : (
                    <OptionLink to="/sign-in">SIGN IN</OptionLink>
                )
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null: <CartDropDown/>}
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
