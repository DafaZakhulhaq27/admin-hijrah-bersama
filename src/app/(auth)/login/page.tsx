import { getSession } from '@/utils/session'
import { redirect } from 'next/navigation'
import LoginForm from './LoginForm'

export default async function LoginPage() {
  const session = await getSession()
  if (session) redirect('/home')
  return <LoginForm />
}
