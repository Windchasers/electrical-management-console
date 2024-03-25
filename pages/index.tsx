import Head from 'next/head'
import Image from 'next/image'
import {Button } from 'antd'
import { Inter } from '@next/font/google'
import styles from './index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.home}>
 <Button>登陆</Button>
    </div>
  )
}
