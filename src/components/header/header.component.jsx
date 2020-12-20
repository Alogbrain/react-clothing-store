import React from "react"
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from "./header.styles";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {signOutStart} from "../../redux/user/user.actions";
import {ReactComponent as Logo} from "../../assets/crown.svg";

const Header = ({currentUser,signOutStart}) => (
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
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                )
            }
        </OptionsContainer>
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);