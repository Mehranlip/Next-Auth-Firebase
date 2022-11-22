import Link from "next/link"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../utils/firebase"

export default function nav() {

    const [user, loading] = useAuthState(auth)

    return (
        <nav className="flex justify-between items-center py-10">
            <Link href={"/"}>
                Logo
            </Link>
            <ul>
                {!user && (
                    <Link href="/auth/login" className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
                        Join now
                    </Link>
                )}
                {user && (
                    <div>
                        <Link href={"/dashboard"}>
                            <img src={user.photoURL} />
                        </Link>
                    </div>
                )}
            </ul>
        </nav >
    )
}