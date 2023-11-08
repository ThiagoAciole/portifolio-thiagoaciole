import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projetos";
import Footer from "./components/Footer"; // Certifique-se de importar o componente Footer.
import Contato from "./components/navBar/Contato";
import AppLayout from "./layout/appLayout";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route
            index
            element={
              <div className="flex-1">
                <Home />
                <About />
              </div>
            }
          />

          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
