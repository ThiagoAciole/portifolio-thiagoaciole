import Cards from "../../components/CardsProjects";
import Tabs from "../../components/tabs/";

import { useState } from "react";
import { Grid } from "@tremor/react";
export default function Projects() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const tabs = [
    {
      id: "tab1",
      label: "Frontend",
      content: (
        <div className="space-y-4 mt-4 px-14 ">
          <Grid
            numItemsSm={1}
            numItemsMd={2}
            numItemsLg={3}
            className="gap-6 mt-6"
          >
            <Cards />
            <Cards />
            <Cards />
          </Grid>
        </div>
      ),
    },
    {
      id: "tab2",
      label: "React",
      content: (
        <div className="space-y-4 mt-4 px-14 ">
          <Grid
            numItemsSm={1}
            numItemsMd={2}
            numItemsLg={3}
            className="gap-6 mt-6"
          >
            <Cards />
            <Cards />
            <Cards />
          </Grid>
        </div>
      ),
    },
    {
      id: "tab3",
      label: "Android",
      content: (
        <div className="space-y-4 mt-4 px-14 ">
          <Grid
            numItemsSm={1}
            numItemsMd={2}
            numItemsLg={3}
            className="gap-6 mt-6"
          >
            <Cards />
            <Cards />
            <Cards />
          </Grid>
        </div>
      ),
    },
    {
      id: "tab4",
      label: "Design",
      content: <div className="mt-4 mb-4 space-y-4"></div>,
    },
  ];

  return (
    <>
      <div id="projects"className="space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700">Projetos</h1>
          <p className=" text-gray-600">
            Conheça Alguns Projetos Feitos Por Mim
          </p>
        </div>

        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </>
  );
}
