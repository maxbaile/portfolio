import { Badge, Tag } from "@/components";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-12 sm:flex sm:justify-center">
          <Tag dot color="green">
            Available for a mission
          </Tag>
        </div>
        <div className="flex items-center justify-center">
          <Badge
            src="/profil.jpg"
            label="- WEB DEVELOPER - WEB DEVELOPER "
            className="text-portal-content-emphasis dark:text-dark-portal-content-emphasis"
          />
        </div>
        <div className="text-center mt-12">
          <h1 className="text-4xl font-bold tracking-tight text-portal-content-strong dark:text-dark-portal-content-strong sm:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-portal-content dark:text-dark-portal-content">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
