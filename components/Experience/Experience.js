function Experience(props) {
    let desc = props.desc.map((point) => {
        return <li key={point}>{point}</li>;
    });
    return (
        <div className="mb-12">
            <div className="width-full flex justify-between flex-col md:flex-row">
                <div className="flex-grow-0">
                    <p className="font-bold text-xl lg:text-2xl">
                        {props.title}
                    </p>
                    <a
                        className="text-lg font-semibold lg:text-xl text-blue-800 hover:text-blue-400"
                        href={props.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {props.company}
                    </a>
                </div>
                <p className="flex-grow-0 font-semibold text-gray-500">
                    {props.date}
                </p>
            </div>

            <ul className="mt-5 text-md lg:text-lg list-disc px-8 text-gray-600">
                {desc}
            </ul>
        </div>
    );
}
export default Experience;
