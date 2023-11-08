/* eslint-disable react/no-unescaped-entities */
import { BookCheck } from "lucide-react";

export default function CardAbout() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl border rounded-lg shadow overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0 flex items-center">
          <img
            className="h-full w-full object-cover rounded-xl  md:h-full md:w-60"
            src="https://media.licdn.com/dms/image/D4D03AQFsJGvHHqV_9Q/profile-displayphoto-shrink_800_800/0/1679347500700?e=1704326400&v=beta&t=eIAVgEBBBGHLKq3mTPJFzMK_3BpSvuzJRQ0UvrT6dNE"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="flex flex-row space-x-2 items-center mt-1 mb-4">
            <BookCheck className="text-gray-600" size={18} />
            <p className="block  text-lg leading-tight font-medium text-black ">
              Sobre Mim
            </p>
          </div>
          <div className="flex">
            <p className="mt-2 text-slate-500 leading-tight md:text-base sm:text-sm">
              Olá, sou Thiago Aciole tenho 21 anos de idade, apaixonado por
              tecnologia e design. Comecei na T.I aos 12 como voluntário no
              projeto de inclusão digital "Inclus.com". Tenho experiência em
              design gráfico, manutenção de computadores e robótica educacional.
              Atualmente, sou estudante de Engenharia da Computação,
              desenvolvedor Front-end e Designer UX/UI no @iFood. Busco
              constantemente desafios e aprendizados para me aprimorar no mundo
              da tecnologia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
