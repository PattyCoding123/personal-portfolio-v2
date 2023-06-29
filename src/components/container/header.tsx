"use client";

import { motion, type Variants } from "framer-motion";
import ContainerWrapper from "../wrapper/container-wrapper";

const scaleVariants = {
  // For the image circles to appear larger
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
} satisfies Variants;

export default function Header() {
  return (
    <ContainerWrapper
      id="home"
      className="relative bg-slate-200 p-0 dark:bg-black"
    >
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center px-8 pb-0 pt-24 xl:flex-row 3xl:pt-32">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex h-full flex-[0.65] flex-col items-start justify-start 3xl:mr-0 3xl:w-full"
        >
          <div className="flex w-full flex-col items-end justify-end ">
            <div className="flex w-auto flex-row items-center justify-center rounded-[15px] border-white bg-slate-100 px-8 py-4 text-[1.5rem] shadow-md">
              <span>👋</span>
              <div className="ml-5">
                <p className="text-left text-[0.8rem] leading-6 text-black 3xl:text-[1.75rem]">
                  Hello, I am
                </p>
                <h1 className="text-center text-[2.75rem] font-extrabold capitalize text-black text-foreground 3xl:text-[4rem] xs:text-[2rem]">
                  Patrick Ducusin
                </h1>
              </div>
            </div>

            <div className="mt-12 flex w-auto flex-col items-start justify-start rounded-[15px] border-white bg-slate-100 px-8 py-4 text-[1.5rem] shadow-md xl:items-center xl:justify-center">
              <p className="text-right text-[1.25rem] uppercase leading-6 text-black 3xl:text-[1.75rem]">
                C.S. Student
              </p>
              <p className="text-right text-[1.25rem] uppercase leading-6 text-black 3xl:text-[1.75rem]">
                Software Engineer
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
          className="relative my-8 flex h-full flex-1 items-end justify-end xl:my-0"
        >
          <img
            className="z-[1] w-full object-contain"
            src="/myprofile-modified.png"
            alt="profile image"
          />

          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src="/circle.svg"
            alt="profile background"
            className="absolute bottom-0 left-0 right-0 z-0 h-[90%] w-full"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="ml-0 flex h-full w-full flex-[0.75] flex-row flex-wrap items-start justify-evenly xl:ml-4 xl:flex-col [&>*:nth-child(1)]:h-64 [&>*:nth-child(1)]:w-64 [&>*:nth-child(2)]:h-52 [&>*:nth-child(2)]:w-52 [&>*:nth-child(3)]:m-0 [&>*:nth-child(3)]:h-40 [&>*:nth-child(3)]:w-40"
        >
          {["/typescript.png", "/flutter.png", "/react.png"].map(
            (image, index) => (
              <div
                key={`image-${index}`}
                className="m-[1.75rem] flex h-full w-full items-center justify-center rounded-[50%] bg-slate-100 shadow-md"
              >
                <img
                  src={image}
                  alt="technology image"
                  className="h-3/5 w-3/5"
                />
              </div>
            )
          )}
        </motion.div>
      </div>
    </ContainerWrapper>
  );
}
