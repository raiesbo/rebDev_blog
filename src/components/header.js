import React from 'react';
import { Link } from 'gatsby';

export default function Header() {

    const navMenu = [
        ['Home', '/'],
        ['Blog', '/blog'],
        ['About', '/about-me'],
        ['Contact', '/contact'],
    ]

    const menuDisplay = () => {
        return (
            <ul>
                {
                    navMenu.map((item, id) => {

                        return (
                            <li key={id}><Link to={item[1]}>{item[0]}</Link></li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <header>

            <h1>REBDEV BLOG</h1>

            <nav>
                {
                    menuDisplay()
                }
            </nav>
        </header>
    )
}