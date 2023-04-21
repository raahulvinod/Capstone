import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";

const SignIn = ()=> {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <div>
            <h1>Signin page.</h1>
             <button onClick={logGoogleUser}>Sign in with google</button>
        </div>
    )
}

export default SignIn;