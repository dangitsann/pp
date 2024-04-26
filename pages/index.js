import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Slider from '@/components/Slider';
import { SliderData } from '@/components/SliderData';

const inter = Inter({ subsets: ['latin'] }) // don't think I need this

export default function Home() {
  return (
    <>
    {/* <div className
    <div class="bg-image1"></div>
    <div class="bg-text">On a remote jungle island, a measly salesman constructed his paradise...</div>
  
    <main className={styles.main}> */}
    <div>

      <Head>
        <title>Peddlers Paradise</title>
        <meta name="description" content="Home tiki bar and lounge" />
        <link rel="icon" href="/peddlers-favicon.png" />
      </Head>
      <Hero heading= "Welcome to Peddler's Paradise" message="On a remote jungle island, a measly salesman constructed his paradise..."/>
      <Slider slides={SliderData} />
    </div>
    </>
  )
}
