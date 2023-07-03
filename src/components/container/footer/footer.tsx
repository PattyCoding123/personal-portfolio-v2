import ContainerWrapper from "@/components/wrapper/container-wrapper";
import MotionWrapper from "@/components/wrapper/motion-wrapper";
import ContactForm from "./contact-form";
import { Icons } from "@/components/icons";

export default function Footer() {
  return (
    <ContainerWrapper
      id="contact"
      className="bg-background-secondary dark:bg-background"
    >
      <MotionWrapper className="w-full flex-1 flex-col">
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-foreground">
          If you would like to contact me...
        </h2>
        <div className="mx-8 mb-8 mt-16 flex w-full flex-wrap items-center justify-evenly md:w-3/5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer no-underline"
          >
            <div className="mx-0 my-4 flex min-w-[290px] flex-row items-center justify-start rounded-[10px] bg-slate-50 p-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 dark:bg-slate-900 xs:w-full">
              <Icons.file className="mx-[0.7rem] my-0 h-10 w-10" />
              <p className="text[0.8rem] text-left font-semibold leading-6 text-foreground/80 3xl:text-[1.75rem]">
                Click to view résumé
              </p>
            </div>
          </a>

          <a
            href="mailto:pducusin123@gmail.com"
            className="cursor-pointer no-underline"
          >
            <div className="mx-0 my-4 flex min-w-[290px] flex-row items-center justify-start rounded-[10px] bg-slate-50 p-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 dark:bg-slate-900 xs:w-full">
              <Icons.mail className="mx-[0.7rem] my-0 h-10 w-10" />
              <p className="text[0.8rem] text-left leading-6 text-foreground/80 3xl:text-[1.75rem]">
                pducusin123@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/patrick-ducusin-879b25208/"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer no-underline"
          >
            <div className="mx-0 my-4 flex min-w-[290px] flex-row items-center justify-start rounded-[10px] bg-slate-50 p-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 dark:bg-slate-900 xs:w-full">
              <Icons.linkedin className="mx-[0.7rem] my-0 h-10 w-10" />
              <p className="text[0.8rem] text-left leading-6 text-foreground/80 3xl:text-[1.75rem]">
                My LinkedIn page
              </p>
            </div>
          </a>
        </div>
        <ContactForm />
      </MotionWrapper>
    </ContainerWrapper>
  );
}
