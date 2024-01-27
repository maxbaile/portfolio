import { Card } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const About: FC = () => {
  return (
    <section className="bg-portal-background dark:bg-dark-portal-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-portal-content-strong dark:text-dark-portal-content-strong">
            About
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-6 mt-8">
          <Card className="bg-portal-background-subtle dark:bg-dark-portal-background-subtle ring-portal-background-subtle dark:ring-dark-portal-background-subtle col-span-4">
            <div className="text-portal-content-emphasis dark:text-dark-portal-content-emphasis">
              <p>I’m Max,</p>
              <p>
                As a seasoned Full Stack Developer, I blend my expertise in
                front-end and back-end technologies to create robust and
                user-centric web applications.
              </p>
              <p>
                Witha strong foundation in computer science and a keen eye for
                UI/UX design principles, I bring a holistic approach to every
                project.
              </p>
            </div>
          </Card>
          <Card className="flex justify-center items-center bg-portal-background-subtle dark:bg-dark-portal-background-subtle ring-portal-background-subtle dark:ring-dark-portal-background-subtle col-span-2">
            <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden">
              <Image
                src="/profil.jpg"
                height={150}
                width={150}
                alt="me"
                className="absolute object-cover"
              />
            </div>
          </Card>
          <Card className="bg-portal-background-subtle dark:bg-dark-portal-background-subtle ring-portal-background-subtle dark:ring-dark-portal-background-subtle text-center">
            <h4 className="text-5xl font-bold text-portal-content-strong dark:text-dark-portal-content-strong">
              5+
            </h4>
            <p className="text-xl text-portal-content-emphasis dark:text-dark-portal-content-emphasis">
              Freelance Years
            </p>
          </Card>
          <Card className="bg-portal-background-subtle dark:bg-dark-portal-background-subtle ring-portal-background-subtle dark:ring-dark-portal-background-subtle text-center">
            <h4 className="text-5xl font-bold text-portal-content-strong dark:text-dark-portal-content-strong">
              5+
            </h4>
            <p className="text-xl text-portal-content-emphasis dark:text-dark-portal-content-emphasis">
              Freelance Years
            </p>
          </Card>
          <Card className="bg-portal-background-subtle dark:bg-dark-portal-background-subtle ring-portal-background-subtle dark:ring-dark-portal-background-subtle col-span-4">
            <div className="text-portal-content-emphasis dark:text-dark-portal-content-emphasis">
              <p>I’m Max,</p>
              <p>
                As a seasoned Full Stack Developer, I blend my expertise in
                front-end and back-end technologies to create robust and
                user-centric web applications.
              </p>
              <p>
                Witha strong foundation in computer science and a keen eye for
                UI/UX design principles, I bring a holistic approach to every
                project.
              </p>
            </div>
          </Card>
          <Card className="flex justify-center items-center bg-portal-background-subtle dark:bg-dark-portal-background-subtle ring-portal-background-subtle dark:ring-dark-portal-background-subtle">
            <Link href="https://github.com/maxbaile" target="_blank">
              <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden">
                <Image
                  src="/github.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="typescript"
                />
              </div>
            </Link>
          </Card>
          <Card className="flex flex-col items-center justify-center bg-portal-background-subtle dark:bg-dark-portal-background-subtle ring-portal-background-subtle dark:ring-dark-portal-background-subtle col-span-5">
            <p className="text-xl text-portal-content-emphasis dark:text-dark-portal-content-emphasis">
              My Tech stack
            </p>
            <div className="flex gap-6 mt-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/typescript.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="typescript"
                />
              </div>
              <div className="relative h-10 w-10">
                <Image
                  src="/react.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="typescript"
                />
              </div>
              <div className="relative h-10 w-10">
                <Image
                  src="/next.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="typescript"
                />
              </div>
              <div className="relative h-10 w-10">
                <Image
                  src="/sass.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="typescript"
                />
              </div>
              <div className="relative h-10 w-10">
                <Image
                  src="/tailwindcss.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="typescript"
                />
              </div>
              <div className="relative h-10 w-10">
                <Image
                  src="/vite.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="typescript"
                />
              </div>
              <div className="relative h-10 w-10">
                <Image
                  src="/webpack.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="typescript"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
