import React from 'react'
import { ActiveLink } from './ActiveLink'
import style from './Navbar.module.css'

const Navbar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/Pricing/pricing'
    },
  ];

  return (
    <>
      <nav className={style['menu-container']} >

        {
          menuItems.map( ({text, href}) =>{
            return(
              <ActiveLink key={href} text={text} href={href}/>
            )
          })}

      </nav>
    </>
  )
}

export default Navbar