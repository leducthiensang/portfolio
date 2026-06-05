import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Project1Detail from "./components/Project1Detail";
import Project2Detail from "./components/Project2Detail";
import Project3Detail from "./components/Project3Detail";
import Project4Detail from "./components/Project4Detail";
import Project5Detail from "./components/Project5Detail";
import Project6Detail from "./components/Project6Detail";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      {/* <Experience /> */}
      {/* <Tech /> */}
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/1" element={<Project1Detail />} />
          <Route path="/project/2" element={<Project2Detail />} />
          <Route path="/project/3" element={<Project3Detail />} />
          <Route path="/project/4" element={<Project4Detail />} />
          <Route path="/project/5" element={<Project5Detail />} />
          <Route path="/project/6" element={<Project6Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
