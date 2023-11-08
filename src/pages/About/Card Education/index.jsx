/* eslint-disable react/jsx-key */
import Intelicampo from "../../../assets/intelicampo-logo.png";

const Data = [
  {
    url: "data:image/png;base64,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",
    title: "Bacharelado em Engenharia da Computação",
    description: "Instituto Federal de Campina Grande - IFPB",
    date: "Jun de 2021 - o momento ",
  },
];
export default function CardEducation() {
  return (
    <div className=" max-w-md mx-auto overflow-hidden md:max-w-2xl">
      <div className=" md:flex">
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
