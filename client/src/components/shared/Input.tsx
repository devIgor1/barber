"use client"

import { RegisterOptions, UseFormRegister } from "react-hook-form"

interface InputProps {
  type: string
  placeholder?: string
  name: string
  register: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
  className?: string
  step?: string
}

export function Input({
  name,
  placeholder,
  register,
  type,
  rules,
  error,
  className,
}: InputProps) {
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-500 text-sm my-1">{error}</p>}
    </>
  )
}
