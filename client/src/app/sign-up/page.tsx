"use client"

import Logo from "@/components/Logo"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Barbershop name is required.",
  }),
  email: z.string().min(2, {
    message: "Email is required.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  function handleSignUp(values: z.infer<typeof formSchema>) {}

  return (
    <>
      <div className="bg-zinc-950 flex-center min-h-screen w-full">
        <div className="flex-center flex-col gap-9 max-w-[500px] w-full">
          <Logo />
          <div className="w-full px-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSignUp)}
                className="space-y-4 w-full"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl text-white">
                        Barbershop Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full text-white"
                          type="text"
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
                    <FormItem>
                      <FormLabel className="text-xl text-white">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full text-white"
                          type="email"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl text-white">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full text-white"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  size={"lg"}
                  variant={"outline"}
                  type="submit"
                  className="w-full"
                >
                  Sign In
                </Button>
              </form>
            </Form>
            <div className="flex-center mt-2 text-white">
              <h1>
                Member already?{" "}
                <Link
                  href="/sign-in"
                  className="text-[#FFF200] hover:underline"
                >
                  Log in
                </Link>{" "}
                now!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
