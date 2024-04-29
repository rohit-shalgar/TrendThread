import {signInWithGooglePopup,
  createUserDocumentFromAuth, } from "../../utils/firebase.util";

const SignIn = () => {
        const logInGoogleUser = async () => {
             const { user } = await signInWithGooglePopup();
             const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logInGoogleUser}>Sign in with Google</button>
        </div>       
    )
};

export default SignIn;