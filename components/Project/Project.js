function Project(props) {
    let demo = [];
    let code = [];
    let readmore = [];
    if (props.demoLink)
        demo = (
            <a href={props.demoLink} target="_blank" rel="noreferrer">
                <button className="mt-6 py-2 px-3 mr-5 lg:mr-3 xl:mr-5 bg-gray-300 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    View Demo
                </button>
            </a>
        );
    if (props.codeLink)
        code = (
            <a href={props.codeLink} target="_blank" rel="noreferrer">
                <button className="mt-6 py-2 px-3 mr-5 bg-gray-800 text-gray-100 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    View Code
                </button>
            </a>
        );
    if (props.descLong)
        readmore =(
            <a href={"/readmore/"+props.title} rel="noreferrer">
                <button className="mt-6 py-2 px-3 bg-gray-600 text-gray-100 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    Read more
                </button>
            </a>
        )

        return (
            <div className="container justify-center bg-white lg:max-w-md mb-12 shadow-lg  hover:shadow-xl transition duration-500 rounded-lg">
                <img
                    src={"/images/projectImages/" + props.image}
                    className="rounded-t-lg"
                    alt="oops"
                ></img>
                <div className="py-6 px-8 rounded-lg bg-white">
                    <h1 className="text-gray-700 font-bold text-2xl mb-3">
                        {props.title}
                    </h1>
                    <p className="text-gray-700 tracking-wide">{props.desc}</p>
                    {demo}
                    {code}
                    {readmore}
                </div>
            </div>
        );
}
export default Project;
