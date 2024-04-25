
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React from "react"
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function menu() {
    return (
        <React.Fragment>
             
            <div class="bg-image3">

                <h2> menu </h2>
                <a
                    href="/about"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    </a>
            </div>
           
           
            <main className={styles.main}>
                
            </main>
            
        </React.Fragment>
        
    )
    
}