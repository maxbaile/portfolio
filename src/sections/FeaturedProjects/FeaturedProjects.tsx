import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@/components";
import { FC } from "react";

const FeaturedProjects: FC = () => {
  return (
    <section className="bg-portal-background dark:bg-dark-portal-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-portal-content-strong dark:text-dark-portal-content-strong">
            Featured Projects
          </h2>
        </div>

        <TabGroup className="flex flex-col items-center justify-center">
          <TabList variant="solid" className="mt-8">
            <Tab>All</Tab>
            <Tab>Commerce</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>All</TabPanel>
            <TabPanel>Commerce</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default FeaturedProjects;
