import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import GridRow from "./components/GridRow";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  
  };
  return (
    <div>
      <Header onClick={handleClick} show={show} />
      <Sidebar show={show} />
      <Content show={show} />
      <GridRow show={show} />
    </div>
  );
}

export default App;
