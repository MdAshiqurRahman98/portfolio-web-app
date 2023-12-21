

const BenefitedPerson = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            <div className="card rounded-lg p-5 bg-base-200">
                <div className="mb-1 flex flex-grow justify-center">
                    <img className="w-80 h-52 object-cover" src='https://i.ibb.co/Q7WV4qN/Students-logo.png' alt="Image" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center mt-5 mb-1 px-2 py-[2px]">Students</h3>
                </div>
            </div>
            <div className="card rounded-lg p-5 bg-base-200">
                <div className="mb-1 flex flex-grow justify-center">
                    <img className="w-80 h-52" src='https://i.ibb.co/zmFnxyC/Educator-logo.png' alt="Image" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center mt-5 mb-1 px-2 py-[2px]">Educators</h3>
                </div>
            </div>
            <div className="card rounded-lg p-5 bg-base-200">
                <div className="mb-1 flex flex-grow justify-center">
                    <img className="w-80 h-52 object-cover" src='https://i.ibb.co/1qwVtwZ/Developer-logo.png' alt="Image" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center mt-5 mb-1 px-2 py-[2px]">Developers</h3>
                </div>
            </div>
            <div className="card rounded-lg p-5 bg-base-200">
                <div className="mb-1 flex flex-grow justify-center">
                    <img className="w-80 h-52" src='https://i.ibb.co/y0NnsZt/Corporate-logo.png' alt="Image" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center mt-5 mb-1 px-2 py-[2px]">Corporate Professionals</h3>
                </div>
            </div>
            <div className="card rounded-lg p-5 bg-base-200">
                <div className="mb-1 flex flex-grow justify-center">
                    <img className="w-80 h-52 object-cover" src='https://i.ibb.co/zJ2RYJX/Freelancers-logo.jpg' alt="Image" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center mt-5 mb-1 px-2 py-[2px]">Freelancers</h3>
                </div>
            </div>
            <div className="card rounded-lg p-5 bg-base-200">
                <div className="mb-1 flex flex-grow justify-center">
                    <img className="w-80 h-52" src='https://i.ibb.co/2t8XCDP/Researcher-logo.jpg' alt="Image" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-center mt-5 mb-1 px-2 py-[2px]">Researchers</h3>
                </div>
            </div>
        </div>
    );
};

export default BenefitedPerson;