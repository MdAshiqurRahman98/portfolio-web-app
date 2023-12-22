import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <>
            <Helmet>
                <title>User Profile | TaskFlow</title>
            </Helmet>
            <div className="mb-11 text-center">
                <h3 className="text-3xl font-bold mt-14 mb-16">Your Profile</h3>
                <div className="overflow-x-auto">
                    <figure className="flex justify-center mb-7">
                        <img className="rounded-full w-32 h-32" src={user.photoURL} alt="Image" />
                    </figure>
                    <p className="text-xl font-semibold mb-1">{user.displayName}</p>
                    <p className="mb-7">{user.email}</p>
                </div>
            </div>
        </>
    );
};

export default UserProfile;