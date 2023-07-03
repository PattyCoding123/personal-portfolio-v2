"use client";

import { useState } from "react";
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
import { client } from "@/lib/sanityClient";
import { ButtonLoading } from "@/components/button-loading";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = ({ name, email, message }: FormData) => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    void client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
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
            onSubmit={void form.handleSubmit((data) => onSubmit(data))}
            className="mx-8 my-4 flex w-2/5 flex-col items-center justify-center rounded-md bg-card/80 p-4"
          >
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
            {isLoading ? (
              <ButtonLoading />
            ) : (
              <Button
                className="mt-2 cursor-pointer rounded-[10px] border-none bg-primary px-8 py-4 text-left text-[0.8rem] font-medium leading-6 text-primary-foreground outline-none transition-all duration-300 ease-in-out 3xl:text-[1.75rem]"
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
