import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
      
      <div class="bg-image1"></div>
      <div class="bg-text">On a remote jungle island, a measly salesman constructed his paradise...</div>
    
      <main className={styles.main}>

      
        <Head>
          <title>Peddler's Paradise</title>
          <meta name="description" content="Home tiki bar and lounge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/peddlers-favicon.png" />
        </Head>
        
 
         


      
      
      </main>
    </>
  )
}
