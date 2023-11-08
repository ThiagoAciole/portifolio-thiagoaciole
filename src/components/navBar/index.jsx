import { useState } from "react";
import Logo from "../../assets/logo.svg";
import GitHub from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Menu from "../../assets/align-left.svg";
import BackX from "../../assets/backX.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ResponsiveDialog from "./Contato";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [selectedItem, setSelectedItem] = useState("home");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [open, setOpen] = useState();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
    scroll.scrollTo(item, {
      smooth: true,
      duration: 500,
      offset: -50, // You can adjust the offset as needed
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const clearSelectedItem = () => {
    setSelectedItem("");
  }

  return (
    <div
      className={` bg-white md:px-24  md:py-4 md:space-x-4 flex justify-between items-center ${
        isMobileNavOpen === false ? "sm:py-4 sm:px-2" : "sm:py-0 sm:px-0"
      }`}
    >
      <div className="sm:hidden md:block">
        <a href="/">
          <img src={Logo} alt="" width={80} />
        </a>
      </div>

      <div className="hidden md:flex space-x-4 p-1">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          onClick={() => handleItemClick("home")}
          className={`text-gray-600 p-1 hover:text-gray-900 ${
            selectedItem === "home" ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <Link to="/">Home</Link>
        </ScrollLink>
        <ScrollLink
          to="sobre"
          smooth={true}
          duration={500}
          onClick={() => handleItemClick("sobre")}
          className={`text-gray-600 p-1 hover:text-gray-900 ${
            selectedItem === "sobre" ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <Link to="/">Sobre</Link>
        </ScrollLink>

        <button
          onClick={handleOpen}
          className="border p-1.5 border-blue-600 rounded-md text-blue-600"
        >
          Contato
        </button>
      </div>
      <button
        className={`text-gray-600 p-1 hover:text-gray-900 md:hidden ${
          isMobileNavOpen === true ? "hidden" : "block"
        }`}
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        <img src={Menu} alt="" />
      </button>

      <div className={` md:hidden ${isMobileNavOpen ? "block" : "hidden"}`}>
        <div className="fixed w-auto bg-white px-10 py-2">
          <div className="flex  flex-row justify-between mt-4">
            <img src={Logo} alt="" width={100} />
            <button
              className="text-gray-600 p-1  hover:text-gray-900 md:hidden"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <img src={BackX} alt="" />
            </button>
          </div>
          <div className=" flex flex-col w-64 h-screen space-y-14 mt-14 mb-14">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onClick={() => handleItemClick("home")}
              className={` ${
                selectedItem === "home"
                  ? "text-blue-600 border p-1.5 border-blue-600 rounded-md "
                  : "text-gray-600"
              }`}
            >
              <Link to="/">Home</Link>
            </ScrollLink>
            <ScrollLink
              to="sobre"
              smooth={true}
              duration={500}
              onClick={() => handleItemClick("sobre")}
              className={`  ${
                selectedItem === "sobre"
                  ? "text-blue-600 border p-1.5 border-blue-600 rounded-md "
                  : "text-gray-600"
              }`}
            >
              <Link to="/">Sobre</Link>
            </ScrollLink>

            <button
              onClick={handleOpen}
              className="border p-1.5  border-blue-600 rounded-md text-blue-600"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex space-x-4 items-center ${
          isMobileNavOpen === true ? "hidden" : "block"
        } `}
      >
        <a
          target="_blank"
          href="https://github.com/ThiagoAciole"
          rel="noreferrer"
        >
          <img src={GitHub} alt="" width={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-aciole/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="" width={22} />
        </a>
        <Link to="/blog">
          <button
            onClick={clearSelectedItem}
            className="border p-1.5 px-3 border-blue-600 rounded-md text-blue-600"
          >
            Blog
          </button>
        </Link>
        <ResponsiveDialog open={open} handleClose={handleClose} />
      </div>
    </div>
  );
}
