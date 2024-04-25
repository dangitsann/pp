
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React from "react"
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function blog() {
    return (
        <React.Fragment>
            <div class="bg-image4"></div>
            <main className={styles.main}>
                <h2> blog </h2>
                
            </main>
        </React.Fragment>
    )
}