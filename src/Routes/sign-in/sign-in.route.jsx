import {signInWithGooglePopup,
  createUserDocumentFromAuth, } from "../../utils/firebase.util";

import SignUp from '../../components/sign-up/sign-up-form.component';

const SignIn = () => {
        const logInGoogleUser = async () => {
             const { user } = await signInWithGooglePopup();
             await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logInGoogleUser}>Sign in with Google</button>
            <SignUp />
        </div>       
    )
};

export default SignIn;