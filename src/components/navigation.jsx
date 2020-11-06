import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Avatar} from "antd";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation ({user}) {
    const [menuActive, setMenuActive] = useState(false);


    return(
        <nav className="site-navigation">
            <span className="menu-title">WebDev Blog</span>
            <div className={`menu-content-container ${menuActive && "active"}`}>
                <ul>
                    {navLinks.map((link, index) => {
                        return(
                            <li key={index} path={link.path}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        )
                    })
                    }

                    <span>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                        <span className="menu-avatar-name">
                            {`${user.firstName} ${user.lastName}`}
                        </span>
                        <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
                    </span>
                </ul>
            </div>
        </nav>
    )
};