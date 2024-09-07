import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Taskboard from "./components/task/Taskboard"


function App() {


  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <Taskboard />
      </div>
      <Footer />
    </>
  );
}

export default App
