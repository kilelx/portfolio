import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
    <Header />
    <main
    className="overflow-x-hidden"
    >
      <Hero />
      <About />
    </main>
    </>
  )
}