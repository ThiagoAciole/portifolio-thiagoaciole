/* eslint-disable react/jsx-key */
import Intelicampo from "../../../assets/intelicampo-logo.png";

const Data = [
  {
    url: "https://static.ifood.com.br/webapp/images/logo-smile-512x512.png",
    title: "iFood",
    description: "Frontend Web Developer Intern ",
    date: "out de 2022-momento ",
  },
  {
    url: "",
    title: "Projeto Intelicampo",
    description: "Frontend Web Developer ",
    date: "fev de 2023-momento ",
  },
  {
    url: "",
    title: "Projeto Intelicampo",
    description: "Android Developer ",
    date: "jul de 2023-momento ",
  },
  {
    url: "https://static.ifood.com.br/webapp/images/logo-smile-512x512.png",
    title: "iFood",
    description: "Product Designer Intern ",
    date: "fev de 2022-out de 2022 ",
  },
];
export default function CardAbout() {
  return (
    <div className=" flex  max-w-md mx-auto overflow-hidden md:max-w-2xl">
      <div className="md:flex ">
        <div className="p-8 ">
          <div className="space-y-10">
            {Data.map((item) => (
              <div className="flex w-full space-x-4 justify-between ">
                <img
                  src={
                    item.title === "Projeto Intelicampo"
                      ? Intelicampo
                      : item.url
                  }
                  alt=""
                  className="w-10 h-full rounded-full"
                />

                <div className="w-full">
                  <p className="block text-md leading-tight font-medium text-black ">
                    {item.title}
                  </p>
                  <p className=" text-slate-500 text-sm leading-tight">
                    {item.description}
                  </p>
                </div>
                <div className="">
                  <p className="text-slate-500 text-sm leading-tight">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
