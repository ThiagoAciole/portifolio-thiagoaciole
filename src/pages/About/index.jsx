/* eslint-disable react/jsx-key */
import {
  Grid,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";
import CardAbout from "./CardAbout";
import CardExperiencias from "./CardExperiencias";
import CardHabilidades from "./CardHabilidades";
import { Briefcase, BookOpenText } from "lucide-react";
import { MousePointerSquareDashed } from "lucide-react";
import CardEducation from "./Card Education";

export default function About() {
  return (
    <div id="sobre" className="mb-24 w-full">
      <div className="text-center mb-8 px-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Habilidades & Experiencias
        </h1>
        <p className=" text-gray-600">
          Conheça minhas Habilidades <br></br>& Experiencias
        </p>
      </div>
      <Grid numItemsLg={2} className="gap-6 mt-6 px-8">
        <CardAbout />
        <AccordionList className="flex flex-col  bg-white rounded-xl border rounded-lg shadow overflow-hidden md:max-w-2xl   ">
          <Accordion className="">
            <AccordionHeader className="h-32">
              <div className="flex flex-row space-x-2 items-center">
                <Briefcase className="text-gray-600" size={18} />
                <p className="block  text-lg leading-tight font-medium text-black ">
                  Experiencias
                </p>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <CardExperiencias />
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader className="h-32 ">
              <div className="flex flex-row space-x-2 items-center">
                <MousePointerSquareDashed className="text-gray-600" size={18} />
                <p className="block  text-lg leading-tight font-medium text-black ">
                  Habilidades
                </p>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <CardHabilidades />
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader className="h-32 ">
              <div className="flex flex-row space-x-2 items-center">
                <BookOpenText className="text-gray-600" size={18} />
                <p className="block  text-lg leading-tight font-medium text-black ">
                  Educação
                </p>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <CardEducation />
            </AccordionBody>
          </Accordion>
        </AccordionList>
      </Grid>
    </div>
  );
}
