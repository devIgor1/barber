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

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const SignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <div className="bg-zinc-950 flex-center min-h-screen w-full">
        <div className="flex-center flex-col gap-9">
          <Logo />
          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
