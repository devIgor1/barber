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
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const SignIn = () => {
  const { signIn } = useContext(AuthContext)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function handleSignIn(data: z.infer<typeof formSchema>) {
    await signIn(data)
  }

  return (
    <>
      <div className="bg-zinc-950 flex-center min-h-screen w-full">
        <div className="flex-center flex-col gap-9 max-w-[500px] w-full">
          <Logo />
          <div className="w-full px-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSignIn)}
                className="space-y-4 w-full"
              >
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
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-[#FFF200] hover:underline"
                >
                  Sign up
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

export default SignIn
