"use client";

import { type BaseSyntheticEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema, type FormData } from "@/lib/validators/form-validator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { submitContactForm } from "@/lib/actions/contact";
import { ButtonLoading } from "@/components/button-loading";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Bot honeypot: real users never see or fill this field.
  const websiteRef = useRef<HTMLInputElement>(null);
  // Time-trap: bots that submit implausibly fast get silently rejected.
  const startedAtRef = useRef(Date.now());

  const onSubmit = async (
    { name, email, message }: FormData,
    e?: BaseSyntheticEvent
  ) => {
    e?.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const result = await submitContactForm({
      name,
      email,
      message,
      website: websiteRef.current?.value ?? "",
      startedAt: startedAtRef.current,
    });

    setIsLoading(false);

    if (result.success) {
      setIsFormSubmitted(true);
    } else {
      setSubmitError(result.error);
    }
  };

  return (
    <>
      {isFormSubmitted ? (
        <div>
          <h3 className="text-center text-[2.75rem] font-extrabold capitalize text-foreground">
            Thank you for getting in touch!
          </h3>
        </div>
      ) : (
        <Form {...form}>
          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-8 my-4 flex w-11/12 flex-col items-center justify-center rounded-md bg-card/80 p-4 lg:w-2/5"
          >
            {/* Honeypot: hidden from sighted and screen-reader users, bots fill it in. */}
            <input
              ref={websiteRef}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mx-0 my-[0.75rem] flex w-full cursor-pointer flex-col items-start justify-center rounded-[10%] transition-all duration-300 ease-in-out">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name..."
                      className="w-full rounded-[7px] border-none bg-slate-100 p-[0.95rem] text-left text-[0.8rem] leading-6 text-black outline-none 3xl:text-[1.75rem]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mx-0 my-[0.75rem] flex w-full cursor-pointer flex-col items-start justify-center rounded-[10%] transition-all duration-300 ease-in-out">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email..."
                      className="w-full rounded-[7px] border-none bg-slate-100 p-[0.95rem] text-left text-[0.8rem] leading-6 text-black outline-none 3xl:text-[1.75rem]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mx-0 my-[0.75rem] flex w-full cursor-pointer flex-col items-start justify-center rounded-[10%] transition-all duration-300 ease-in-out">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-44 w-full rounded-[7px] border-none bg-slate-100 p-[0.95rem] text-left text-[0.8rem] leading-6 text-black outline-none 3xl:text-[1.75rem]"
                      placeholder="Message..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {submitError ? (
              <p className="mt-2 text-[0.8rem] text-destructive">
                {submitError}
              </p>
            ) : null}
            {isLoading ? (
              <ButtonLoading />
            ) : (
              <Button
                className="mt-2 cursor-pointer rounded-[10px] border-none bg-primary px-8 py-4 text-left text-[0.8rem] font-medium leading-6 text-primary-foreground outline-none transition-all duration-300 ease-in-out active:scale-90 3xl:text-[1.75rem]"
                type="submit"
              >
                Submit
              </Button>
            )}
          </form>
        </Form>
      )}
    </>
  );
}
