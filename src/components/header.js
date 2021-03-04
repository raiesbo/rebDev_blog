import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import './header.scss';
// import headerStyles from './header.module.scss';

export default function Header() {

    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
              title
            }
          }
        }
    `)

    const navMenu = [
        ['Home', '/'],
        ['Blog', '/blog'],
        ['About', '/about-me'],
        ['Contact', '/contact'],
    ]

    const menuDisplay = () => {
        return (
            <ul className="nav-link">
                {
                    navMenu.map((item, id) => {

                        return (
                            <li key={id}>
                                <Link to={item[1]} className='nav-item' activeClassName="active-nav-item">
                                    {item[0]}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <header className="header">

            <h1>
                <Link to="/" className="title" >
                    {data.site.siteMetadata.title}
                </Link>
            </h1>

            <nav>
                {
                    menuDisplay()
                }
            </nav>
        </header>
    )
}