"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema, type FormData } from "@/lib/validators/form-validator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { client } from "@/lib/sanityClient";
import { ButtonLoading } from "@/components/button-loading";
import { Textarea } from "@/components/ui/textarea";

export function ProfileForm() {
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
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={void form.handleSubmit((data) => onSubmit(data))}
            className="app__footer-form app__flex"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="app__flex">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name..."
                      className="p-text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Please enter your name...</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="app__flex">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email..."
                      className="p-text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Please enter your email...</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="app__flex">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Message..." {...field} />
                  </FormControl>
                  <FormDescription>
                    What would you like to send?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isLoading ? (
              <ButtonLoading />
            ) : (
              <Button className="p-text" type="submit">
                Submit
              </Button>
            )}
          </form>
        </Form>
      )}
    </>
  );
}
