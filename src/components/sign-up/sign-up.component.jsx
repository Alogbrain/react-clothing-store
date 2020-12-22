import React, {useState} from "react";
import {SignUpContainer, SignUpTitle} from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleChange = event => {
        const {value, name} = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    }

    return (
        <SignUpContainer>
            {/*<SignUpTitle>I do not have an account</SignUpTitle>*/}
            {/*<span>Sign up with your email and password</span>*/}
            <form>
                <FormInput
                    name="displayName"
                    type="text"
                    autoComplete="name"
                    value={displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
};

export default SignUp;
