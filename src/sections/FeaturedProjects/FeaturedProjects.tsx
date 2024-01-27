import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@/components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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
            <TabPanel className="grid grid-cols-2 gap-6 mt-6">
              <Card className="">
                <Link href="#" className="group">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#F56354] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                    <span className="h-2 w-2 rounded-full bg-[#FABF2F] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                    <span className="h-2 w-2 rounded-full bg-[#29CD3F] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                  </div>
                  <div className="h-64 w-full bg-gray-600 rounded-portal-default mt-4"></div>
                  <div className="flex items-end mt-4">
                    <div className="flex-auto">
                      <h3 className="text-2xl font-bold text-portal-content-strong dark:text-dark-portal-content-strong">
                        Portal
                      </h3>
                      <p className="text-portal-content-base dark:text-dark-portal-content-base">
                        A portal to the internet
                      </p>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 group-hover:text-portal-content-strong dark:group-hover:text-dark-portal-content-strong" />
                  </div>
                </Link>
              </Card>
              <Card className="">
                <Link href="#" className="group">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#F56354] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                    <span className="h-2 w-2 rounded-full bg-[#FABF2F] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                    <span className="h-2 w-2 rounded-full bg-[#29CD3F] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                  </div>
                  <div className="h-64 w-full bg-gray-600 rounded-portal-default mt-4"></div>
                  <div className="flex items-end mt-4">
                    <div className="flex-auto">
                      <h3 className="text-2xl font-bold text-portal-content-strong dark:text-dark-portal-content-strong">
                        Portal
                      </h3>
                      <p className="text-portal-content-base dark:text-dark-portal-content-base">
                        A portal to the internet
                      </p>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 group-hover:text-portal-content-strong dark:group-hover:text-dark-portal-content-strong" />
                  </div>
                </Link>
              </Card>
              <Card className="">
                <Link href="#" className="group">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#F56354] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                    <span className="h-2 w-2 rounded-full bg-[#FABF2F] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                    <span className="h-2 w-2 rounded-full bg-[#29CD3F] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                  </div>
                  <div className="h-64 w-full bg-gray-600 rounded-portal-default mt-4"></div>
                  <div className="flex items-end mt-4">
                    <div className="flex-auto">
                      <h3 className="text-2xl font-bold text-portal-content-strong dark:text-dark-portal-content-strong">
                        Portal
                      </h3>
                      <p className="text-portal-content-base dark:text-dark-portal-content-base">
                        A portal to the internet
                      </p>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 group-hover:text-portal-content-strong dark:group-hover:text-dark-portal-content-strong" />
                  </div>
                </Link>
              </Card>
              <Card className="">
                <Link href="#" className="group">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#F56354] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                    <span className="h-2 w-2 rounded-full bg-[#FABF2F] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                    <span className="h-2 w-2 rounded-full bg-[#29CD3F] ring-1 ring-portal-ring dark:ring-dark-portal-ring"></span>
                  </div>
                  <div className="h-64 w-full bg-gray-600 rounded-portal-default mt-4"></div>
                  <div className="flex items-end mt-4">
                    <div className="flex-auto">
                      <h3 className="text-2xl font-bold text-portal-content-strong dark:text-dark-portal-content-strong">
                        Portal
                      </h3>
                      <p className="text-portal-content-base dark:text-dark-portal-content-base">
                        A portal to the internet
                      </p>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 group-hover:text-portal-content-strong dark:group-hover:text-dark-portal-content-strong" />
                  </div>
                </Link>
              </Card>
            </TabPanel>
            <TabPanel>Commerce</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default FeaturedProjects;
