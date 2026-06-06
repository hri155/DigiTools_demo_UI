const About = () => {
    return(
        <div className=" flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-16 px-4 py-8 bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
            <div>
                <h2 className="text-white text-4xl font-bold">50K+</h2>
                <span className="text-gray-400"><p>Active Users</p></span>
                </div>
            <div>
                <h2 className="text-white text-4xl font-bold">200+</h2>
                 <span className="text-gray-400"><p>Premium Tools</p></span>
            </div>
            <div>
                <h2 className="text-white text-4xl font-bold">4.9</h2>
                <span className="text-gray-400"><p>Rating</p></span>
            </div>
        </div>

    );
};
export default About;