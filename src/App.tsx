import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Divider from './components/Divider'
import About from './components/About'
import Areas from './components/Areas'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*
  App layout
  - Renders the global page structure: Header, main content (Hero, sections)
  - Each section is its own component and should not overlap other sections.
  - Keep `main` padding aligned to the header height so section anchors work.
*/

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#e6e6e6]">
      <Header />
      <main className="pt-5">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Areas />
        <Divider className="mt-[72px] mb-4" />
        <Publications />
        <Divider className="mt-5 mb-9" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
