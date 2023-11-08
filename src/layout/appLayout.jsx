import { Outlet } from "react-router-dom";

import NavBar from "../components/navBar";

import Footer from "../components/Footer"; // Certifique-se de importar o componente Footer.

const AppLayout = () => {
  return (
    <>
      <div className="relative  flex flex-col min-h-screen">
        <div className="fixed z-10 w-full">
          <NavBar />
        </div>
        <main className="flex-1 z-1 ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
