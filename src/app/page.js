import Link from "next/link";

export default function Home() {
  return <main style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <h1 style={{color:'black',marginBottom:'1rem'}}>Next Page Transitions</h1>
    <Link style={{color:'black',textDecoration:'none'}} href='/projects' >{'> '}View Projects</Link>
  </main>
}
