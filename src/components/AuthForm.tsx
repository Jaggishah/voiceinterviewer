"use client";


import Image from 'next/image'
import React from 'react'
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField";


const authFormSchema = (type: FormType) => {
    return z.object({
      name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
      email: z.string().email(),
      password: z.string().min(3),
    });
  };


const AuthForm = ({type}:{type:FormType}) => {
    const router = useRouter();
    const isSignIn = type === "sign-in";

    const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        password: "",
        },
    });

    const onSubmit = () => {}

  return (
    <div className='card-border lg:min-w-[566px]'>
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" height={32} width={38} />
                <h2 className="text-primary-100">Prep-Ping</h2>
            </div>
            <h3>Practice job interviews with AI</h3>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-6 mt-4 form"
                >
                    {!isSignIn && (
                    <FormField
                        control={form.control}
                        name="name"
                        label="Name"
                        placeholder="Your Name"
                        type="text"
                    />
                    )}

                    <FormField
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="Your email address"
                    type="email"
                    />

                    <FormField
                    control={form.control}
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    />

                    <Button className="btn" type="submit">
                    {isSignIn ? "Sign In" : "Create an Account"}
                    </Button>
                </form>
                </Form>

        </div>
     
    </div>
  )
}

export default AuthForm
