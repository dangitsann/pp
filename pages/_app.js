import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import NavItem from '@/components/NavItem'


export default function App({ Component, pageProps }) {
  return <>
      <React.Fragment>
        <Head>
          <meta name="theme-color" content="#D5e2c5" />
        </Head>

        
        <cornerlogo>
          <Image 
          className={styles.logo}
          src="/White Text Logo.png"
          alt="Peddler's Paradise Logo"
          width={200}
          height={200}
          />
        </cornerlogo>

        <NavItem></NavItem>
        <Component {...pageProps} />
        
      </React.Fragment>

  </>


}
