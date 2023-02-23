import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './users.module.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Users() {
  useEffect(()=>{
    console.log(666);

  })
  
  return (
    <div className={styles.contents}>
      users-signed
    </div>
  )
}
