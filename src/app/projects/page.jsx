'use client'
import Link from "next/link"
import { Data } from "../data"

const Page = () => {
  return (
    <main className="projects">
        <div className="data">
            {
                Data.map((Item,i) => {
                    return <Link href={`/projects/${Item.curl}`} >{'> ' + Item.title}</Link>
                })
            }
        </div>
    </main>
  )
}

export default Page