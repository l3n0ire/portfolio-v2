function Skills(props) {
    return (
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
            <div className="bg-white lg:max-w-lg mb-12 shadow-lg  hover:shadow-xl transition duration-500 rounded-lg">
                <div className="rounded-t-lg w-full bg-gradient-to-r from-green-400 to-blue-500 p-4">
                    <p className="font-bold text-xl lg:text-2xl text-white">
                        Languages
                    </p>
                </div>
                <div className="p-4 py-6">
                    <p className="text-gray-700 tracking-wide text-lg">
                        {props.languages}
                    </p>
                </div>
            </div>

            <div className="bg-white lg:max-w-lg mb-12 shadow-lg  hover:shadow-xl transition duration-500 rounded-lg">
                <div className="rounded-t-lg w-full bg-gradient-to-r from-red-500 to-yellow-500 p-4">
                    <p className="font-bold text-xl lg:text-2xl text-white">
                        Frameworks and Libraries
                    </p>
                </div>
                <div className="p-4 py-6">
                    <p className="text-gray-700 tracking-wide text-lg">
                        {props.frameworks}
                    </p>
                </div>
            </div>

            <div className="bg-white lg:max-w-lg mb-12 shadow-lg  hover:shadow-xl transition duration-500 rounded-lg">
                <div className="rounded-t-lg w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
                    <p className="font-bold text-xl lg:text-2xl text-white">
                        Databases
                    </p>
                </div>
                <div className="p-4 py-6">
                    <p className="text-gray-700 tracking-wide text-lg">
                        {props.databases}
                    </p>
                </div>
            </div>

            <div className="bg-white lg:max-w-lg mb-12 shadow-lg  hover:shadow-xl transition duration-500 rounded-lg">
                <div className="rounded-t-lg w-full bg-gradient-to-r from-purple-500 to-purple-800 p-4">
                    <p className="font-bold text-xl lg:text-2xl text-white">
                        Concepts
                    </p>
                </div>
                <div className="p-4 py-6">
                    <p className="text-gray-700 tracking-wide text-lg">
                        {props.concepts}
                    </p>
                </div>
            </div>

            <div className="bg-white lg:max-w-lg mb-12 shadow-lg  hover:shadow-xl transition duration-500 rounded-lg">
                <div className="rounded-t-lg w-full bg-gradient-to-r from-blue-400 via-gren-600 to-green-300 p-4">
                    <p className="font-bold text-xl lg:text-2xl text-white">
                        Tools
                    </p>
                </div>
                <div className="p-4 py-6">
                    <p className="text-gray-700 tracking-wide text-lg">
                        {props.tools}
                    </p>
                </div>
            </div>

            <div className="bg-white lg:max-w-lg mb-12 shadow-lg  hover:shadow-xl transition duration-500 rounded-lg">
                <div className="rounded-t-lg w-full bg-gradient-to-r from-blue-400 to-indigo-500 p-4">
                    <p className="font-bold text-xl lg:text-2xl text-white">
                        Soft Skills
                    </p>
                </div>
                <div className="p-4 py-6">
                    <p className="text-gray-700 tracking-wide text-lg">
                        {props.softSkills}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Skills;
