import { auth, provider } from "../firebase config.js"; 
import { signInWithPopup } from "firebase/auth"; 

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = (props) => {
        const {setIsAuth} = props


    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken, { path: "/" });
            setIsAuth(true)
            console.log("User signed in:", result.user);
        } catch (err) {
            console.error("Sign-in error:", err);
        }
    };

    return (
        <div className="auth">
            <p>Sign In With Your Google Account To Continue</p>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    );
};
