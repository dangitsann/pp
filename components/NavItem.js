import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';


const NavItem = () => {
    return (
        <nav>
            <ul>
                <navitem><Link href='/'>home</Link> </navitem>
                <navitem><Link href='/about'>about</Link> </navitem>
                <navitem><Link href='/menu'>menu</Link> </navitem>
                <navitem><Link href='/blog'>blog</Link> </navitem>
            </ul>
        </nav>
    )
}

export default NavItem