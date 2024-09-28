import { useState, useEffect } from "react";
import Header from "./Components/Header";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { resumeData } from "./data/resume-data";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(resumeData); // Set the imported resumeData
  }, []);

  return (
    <div className="App">
      <Header data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio} />
      <Contact data={data.main} />
      <Footer data={data.main} />
    </div>
  );
};

export default App;
