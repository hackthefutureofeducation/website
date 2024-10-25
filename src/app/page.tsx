import { About } from "@/components/About"
import { MainSection } from "@/components/Main"
import { Nav } from "@/components/Nav"
import { Services } from "@/components/Services"
import React from "react"
export default function App(){
  return(
    <main>
      <Nav/>
      <MainSection/>
      <About/>
      <Services/>
    </main>
  )
}