import React from 'react';
import {connect} from 'react-redux'
import {googleSignInStart} from "../../redux/user/user.actions";
const HomePage = ({currentUser, signInWithGoogle}) => {
    return (
        <div>
            {/*user : {currentUser.id}*/}
            {
                currentUser ? <div>login success </div> : <div>login failure</div>
            }
            {
                currentUser ? <button onClick={signInWithGoogle}>Logout</button> :
                    <button onClick={signInWithGoogle}>Login</button>
            }

        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    signInWithGoogle : () => dispatch(googleSignInStart())
})
export default connect(null, mapDispatchToProps)(HomePage);