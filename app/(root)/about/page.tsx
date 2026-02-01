import Image from "next/image";
import aboutMeImage from "../../../public/assets/images/about/about-me-image.jpg";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { MdOutlineFileDownload } from "react-icons/md";

const About = () => {
  return (
    <section className="h-[200vh]">
      <div className="container mx-auto xl:max-w-7xl px-6">
        <div className="flex items-end justify-between gap-10 pt-36 lg:pt-44 xl:pt-56 pb-10 md:pb-16 border-b border-black/10">
          <h1 className="text-black max-[370px]:text-4px text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            Who I Am and <br /> What I Do
          </h1>
          <div className="max-md:hidden">
            <PrimaryButton link="/" text="Download Resume">
              <MdOutlineFileDownload />
            </PrimaryButton>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10 pt-10 md:pt-16">
          <div className="md:col-span-7">
            <h2 className="text-black/85 text-2xl xl:text-[32px]  md:pb-20 xl:pb-24">
              I’m Nikola, a full-stack developer with over 3 years of
              professional experience based in Skopje, Macedonia.
            </h2>
            <div className="aspect-video block md:hidden my-12">
              <Image
                src={aboutMeImage}
                alt="about me image"
                width={600}
                height={600}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-4 pb-8 md:pb-12">
              <h4 className="text-lg text-black/85">What I Do</h4>
              <p className="text-base text-black/70 md:max-w-[80%]">
                I build modern, scalable web applications using JavaScript and
                TypeScript, with a focus on React, Next.js, and Node.js,
                prioritizing performance and maintainable code.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-lg text-black/85">Beyond Code</h4>
              <p className="text-base text-black/70 md:max-w-[80%]">
                Outside of development, I like staying active and keeping a good
                balance. I enjoy watching sports, going to the gym, watching
                movies and TV shows, and spending time with friends.
              </p>
            </div>
            <div className="block md:hidden pt-12">
              <PrimaryButton link="/" text="Download Resume">
                <MdOutlineFileDownload />
              </PrimaryButton>
            </div>
          </div>
          <div className="relative col-span-4 col-end-13 max-md:hidden">
            <Image
              src={aboutMeImage}
              alt="about me image"
              width={1000}
              height={1000}
              className="absolute top-0 right-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
