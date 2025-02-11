"use client";

import React, {useTransition} from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {FaHourglassEnd, FaRegNewspaper} from "react-icons/fa6";


import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {NewsletterFormSchema, NewsletterFormValues} from "@/lib/schema";
import {orbitron} from "@/app/font";


const NewsletterForm = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<NewsletterFormValues>({
        resolver: zodResolver(NewsletterFormSchema),
        defaultValues: {
            email: "",
            agreeToEmails: true
        },
    });

    function handleSubmit(values: NewsletterFormValues) {
        //TODO: Implementing to subscribing newsletter
        startTransition(async () => {
            toast.success(values.email);
        });
    }

    return (
        <div className="mt-2 max-w-md mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel htmlFor="email" className="sr-only dark:text-slate-200">
                                    Email address
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        autoComplete="email"
                                        className="w-full dark:bg-primary dark:text-slate-200 dark:hover:bg-primary/70"
                                        placeholder="Enter your email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="agreeToEmails"
                        render={({field}) => (
                            <FormItem className="flex flex-col justify-start">
                                <div className="flex flex-row gap-x-2 items-center">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel
                                        htmlFor="agreeToEmails"
                                        className="text-sm tracking-normal font-normal text-primary dark:text-slate-400">
                                        I agree to receive emails from Fapethedev
                                    </FormLabel>
                                </div>
                                <FormMessage className=""/>
                            </FormItem>
                        )}
                    />
                    <Button
                        variant="default"
                        disabled={isPending}
                        aria-disabled={isPending}
                        className={cn("font-semibold uppercase", orbitron.className)}
                    >
                        {isPending ? (
                            <>
                                Subscribing... <FaHourglassEnd className="mr-2 h-4 w-4"/>
                            </>
                        ) : (
                            <>
                                Subscribe <FaRegNewspaper className="mr-2 h-4 w-4"/>
                            </>
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
}

export {
    NewsletterForm
};
