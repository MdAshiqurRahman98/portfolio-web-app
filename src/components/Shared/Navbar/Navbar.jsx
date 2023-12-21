import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li className="mt-2 text-lg"><NavLink to="/" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-teal-500 text-lg font-bold"
                    : ""
        }>Home</NavLink></li>

        <li className="mt-2 lg:ml-5 text-lg"><NavLink to="/register" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-teal-500 text-lg font-bold"
                    : ""
        }>Register</NavLink></li>

        <li className="my-2 lg:ml-5 text-lg"><NavLink to="/about-us" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-teal-500 text-lg font-bold"
                    : ""
        }>About Us</NavLink></li>
    </>

    return (
        <div>
            <nav className="flex justify-between pb-1 mb-3 items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        {navLinks}
                    </ul>
                </div>

                <figure className="hidden md:contents"><img className="w-[30px] h-[30px] mt-1" src="https://i.ibb.co/1TSyryC/Task-management-logo.webp" alt="Logo" /><span className="text-3xl font-bold text-teal-500 ml-3">TaskFlow</span></figure>

                <ul className="hidden lg:flex gap-11 flex-1 items-center justify-start lg:ml-72">
                    <li className="text-lg">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-teal-500 text-lg font-bold"
                                        : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-teal-500 text-lg font-bold"
                                        : ""
                            }
                        >
                            Register
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/about-us"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-teal-500 text-lg font-bold"
                                        : ""
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li className="text-lg">
                        {
                            user ? <div className="flex items-center">
                                <span className="mr-5">{user.displayName}</span>
                                <span className="mr-5"><img className="rounded-full w-9 h-9" src={user.photoURL} alt="" /></span>
                                <NavLink
                                    onClick={handleLogOut}
                                >
                                    <button className="btn btn-sm normal-case text-white bg-teal-500 hover:bg-teal-500">Logout</button>
                                </NavLink>
                            </div>
                                : <NavLink
                                    to="/login"
                                >
                                    <button className="btn btn-sm normal-case text-white bg-teal-500 hover:bg-teal-500">Login</button>
                                </NavLink>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;