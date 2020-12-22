import React, {useState} from "react";
import {ButtonsBarContainer, SignInContainer, SignInTitle} from "./sign-in.styles";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import {connect} from "react-redux";
import {googleSignInStart} from "../../redux/user/user.actions";

const SignIn = ({googleSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    })
    const {email, password} = userCredentials;

    const handleChange = event => {
        const {value, name} = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    }
    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    autoComplete="email"
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
})
export default connect(null, mapDispatchToProps)(SignIn);
