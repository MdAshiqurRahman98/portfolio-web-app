import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row md:gap-11 justify-evenly items-center mt-9 md:mt-28 mb-9 md:mb-20">
            <div>
                <h1 className="text-3xl md:text-5xl font-bold text-left mt-7 mb-5">Simplifying Your Work with Intuitive Task Management</h1>
                <Link to='/login'>
                    <button className="btn normal-case text-white bg-teal-500 hover:bg-teal-500 my-5">Let’s Explore</button>
                </Link>
            </div>
            <figure><img className="w-[130px] md:w-[390px]" src="https://i.ibb.co/1TSyryC/Task-management-logo.webp" alt="Logo" /></figure>
        </div>
    );
};

export default Banner;