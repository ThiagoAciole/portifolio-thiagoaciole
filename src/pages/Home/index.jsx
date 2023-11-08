import Avatar from "../../assets/avatar.png";
import { useState, useEffect } from "react";
import "./style.css";

export default function Home() {
  const words = ["Front-end", "React", "Designer", "Android"]; // Lista de palavras para alternar
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // A cada 2 segundos, altera para a próxima palavra na lista
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => {
      clearInterval(interval); // Limpar o intervalo quando o componente é desmontado
    };
  }, []);

  return (
    <div className="lg:flex-row md:flex-row sm:flex-col py-24  flex flex-row items-center justify-center w-auto tracking-tighter">
      <div className="w-auto lg:text-start md:text-start sm:text-center px-4">
        <h3 className=" text-gray-600 lg:text-3xl md:text-3xl sm:text-3xl  lg:w-full md:w-full sm:w-64 leading-tight ">
          Olá 👋 Sou Thiago Aciole
        </h3>
        <div>
          <h1 className=" lg:text-9xl md:text-8xl sm:text-5xl lg:w-full md:w-full sm:w-64 font-extrabold text-blue-700 leading-tight">
            {words[wordIndex]}
          </h1>
          <h1 className="lg:text-9xl md:text-8xl sm:text-5xl lg:w-full md:w-full sm:w-64 font-extrabold text-blue-700 leading-tight ">
            {words[wordIndex] === "Designer" ? "UX/UI" : "Developer"}
          </h1>
        </div>

        <p className="text-gray-600 lg:text-lg lg:w-96 md:w-96 sm:w-64 md:text-md sm:text-base leading-tight tracking-tighter ">
          Estudante de Engenharia da computação com 21 anos de idade, apaixonado
          por tecnologia, desenvolvedor Front-end e Designer UX/UI no @iFood.
        </p>
      </div>
      <div className="">
        <img
          src={Avatar}
          alt="Imagem do portfólio"
          className="lg:w-full md:w-full sm:w-72 "
        />
      </div>
    </div>
  );
}
