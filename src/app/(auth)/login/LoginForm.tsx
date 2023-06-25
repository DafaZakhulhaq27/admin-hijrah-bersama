'use client'

import Button from '@/components/forms/button'
import Input from '@/components/forms/input'
import { LoginModel, initLoginForm, loginModel } from '@/models/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'

const LoginForm = () => {
  const router = useRouter()
  const methods = useForm<LoginModel>({
    mode: 'onTouched',
    resolver: zodResolver(loginModel),
    defaultValues: initLoginForm,
  })

  const { handleSubmit } = methods

  const onSubmit = (data: LoginModel, e: any) => {
    signIn('credentials', { redirect: false, ...data }).then(
      ({ error }: any) => {
        if (error) {
          alert('gagal')
        } else {
          router.refresh()
        }
      },
    )
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 mt-20 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          width={40}
          height={40}
          className="mx-auto h-10 w-auto"
          src="./vercel.svg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input label="Email" name="email" placeholder="email" />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="password"
            />
            <Button type="submit" className="mt-8">
              Sign In
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default LoginForm
