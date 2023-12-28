import Header from "./views/Header";
import About from "./views/About";
import Hero from "./views/Hero";
import Work from "./views/Work";

export default function App() {
  return (
    <>
    <Header />
    <main
    className="overflow-x-hidden"
    >
      <Hero />
      <About />
      <Work />
    </main>
    </>
  )
}