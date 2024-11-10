import FormfacadeEmbed from '@formfacade/embed-react';
import "./styles.css";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Destination from "./components/Destination";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Service />} />
        <Route path="/" element={<Contact />} />

      </Routes>
    </div>
  );
}
