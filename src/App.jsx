import { useEffect } from "react";
import Header from "./views/Header";
import About from "./views/About";
import Hero from "./views/Hero";
import Work from "./views/Work";
import Contact from "./views/Contact";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function App() {

  return (
    <ReactLenis root>
    {/* <> */}
    <Header />
    <main
    className="overflow-hidden"
    >
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
    </ReactLenis >
    // </>
  )
}

// https://github.com/studio-freight/lenis/tree/main/packages/react-lenis