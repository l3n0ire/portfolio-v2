function Education() {
    return (
        <div className="width-full flex justify-between flex-col md:flex-row">
            <div className="flex-grow-0">
                <p className="font-bold text-xl lg:text-2xl">
                    Honours Bachelor of Science
                </p>
                <a
                    className="text-lg font-semibold lg:text-xl text-blue-800 hover:text-blue-400"
                    href="https://www.utoronto.ca/"
                    target="_blank"
                    rel="noreferrer"
                >
                    University of Toronto
                </a>
                <div className="mt-4 text-lg">
                    <p>Computer Science, Software Engineering Specialist</p>
                    <p>GPA: 3.93</p>
                </div>
            </div>
            <p className="flex-grow-0 font-semibold text-gray-500">
                Sept 2019 - Present
            </p>
        </div>
    );
}
export default Education;
