import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Mywork from "./Components/My_work/Mywork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
