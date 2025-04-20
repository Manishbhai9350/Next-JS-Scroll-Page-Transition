import { Data } from "@/app/data"
import ProjectChild from "./ProjectChild"

const Project =  ({params}) => {
    const {curl} =  params 
    const CurrentIdx = Data.findIndex(Item => Item.curl == curl )
    const NextIdx = (CurrentIdx + 1) % Data.length
    const PrevIdx = (CurrentIdx - 1 + Data.length) % Data.length
    const CurrentProject = Data[CurrentIdx]
    const NextProject = Data[NextIdx]
    const PrevProject = Data[PrevIdx]
  return (
    <ProjectChild CurrentProject={CurrentProject} NextProject={NextProject} PrevProject={PrevProject}  />
  )
}

export default Project