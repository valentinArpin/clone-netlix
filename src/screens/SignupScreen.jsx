import "./SignupScreen.css"
import {auth} from "../firebase";
import {useRef} from "react";
export default function SignupScreen() {

    //2 Inscription Login & connexion verification
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register= (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        });
    }

    return(
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button
                    onClick={signIn}
                    type="submit">Sign In</button>

                <h4>
                    <span className="signupScreen__gray">New to Netflix?</span>
                    Sign up now.
                    <span
                        className="signupScreen__link"
                        onClick={register}
                    >Sign up now.</span>
                </h4>
            </form>
        </div>
    );
}