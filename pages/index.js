import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NonMembers from './non-members'
import Members from './membersonly'

export default function Home() {
  const {user, error, isLoading} = useUser();
  if (isLoading) return <div>... loading</div>
  if (error) return <div>{error.message}</div>
  
  if (user) {
    return <Members/>
  }
  return <NonMembers/>
}
