import { useRouter } from 'next/router'
import data from '../../data/data'
import Nav from '../../components/Nav/Nav'
const ReadMore = () => {
    const router = useRouter()
    let projectName= router.query.projectName
    if(projectName){
        projectName=projectName[0]
    }
    const project = data.projects.find(e => e.title === projectName)
    let toDisplay = <p>404 project not found</p>
    if (project && project.title && project.projectType && project.date && project.descLong) {
        toDisplay = (
            <div className='pt-20 lg:pt-60 text-md lg:text-lg lg:py-0 px-7 md:px-16'>
                <h1 className="text-6xl lg:text-7xl font-bold">{project.title}</h1>
                <h2 className="text-xl lg:text-2xl font-bold mt-2">{project.projectType}</h2>
                <h3 className="text-lg lg:text-xl font-medium mt-1">{project.date}</h3>
                <p className="mt-7 text-gray-600">{project.descLong}</p>
            </div>
        )
    }
    return (
        <div className="relative min-h-screen lg:flex">
            <Nav />
            <main className="flex-1  lg:py-0 px-7 md:px-16 flex-col">
            {toDisplay}</main>
            
        </div>
    )
}
export default ReadMore