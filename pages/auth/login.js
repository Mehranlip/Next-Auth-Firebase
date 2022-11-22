import { FcGoogle } from "react-icons/fc"
import { AiFillFacebook } from "react-icons/ai"
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile } from "firebase/auth"
import { auth } from "../../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Login() {
    const [user, loadig] = useAuthState(auth)
    const route = useRouter()
    // sing in with google
    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user);
            route.push("/dashboard")
        } catch (error) {
            console.log(error);
        }
    };

    // sing in with facebook
    const FacebookProvider = new FacebookAuthProvider()
    const facebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, FacebookProvider)
            console.log(result.user);
            route.push("/dashboard")
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            route.push("/dashboard")
        } else {
            console.log("login");
        }
    }, [user])


    return (
        <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-3xl font-medium">
                Join Today
            </h2>
            <div className="py-4">
                <h3 className="py-4"> Sign in with one of the providers</h3>
            </div>
            <div className="flex flex-col gap-4">
                <button onClick={GoogleLogin} className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-3">
                    <FcGoogle className="text-2xl" />
                    Sign in with Google
                </button>
                <button onClick={facebookLogin} className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-3">
                    <AiFillFacebook className="text-2xl text-blue-400" />
                    Sign in with Facebook
                </button>
            </div>
        </div>
    )
}