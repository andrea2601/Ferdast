import Link from 'next/link'
import style from "../Navbar/style.module.scss"
import logo from "../Images/logo.png"
import Image from 'next/dist/client/image'
import { useState } from 'react'
import SideMenu from '../SideMenu'


export default function Navbar() {
    
    const [isActive,setIsActive]=useState(true);

    const ToggleMenu = () =>{
        setIsActive(!isActive)
    }
    
  return (
    <div className={style.Navbar}>
    <div className={style.NavbarElements}>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                    <div className={style.logo}>
                        <a><Image src={logo} layout="responsive" alt="Icona"/></a>
                    </div>
                    </Link>
                </li>
                <div className={style.burgerMenu}>
                <li className={style.container}>

                <div className={isActive? style.container: style.change} onClick={ToggleMenu}>
                <div className={style.bar1}></div>
                <div className={style.bar2}></div>
                <div className={style.bar3}></div>
                </div>

                </li>
                </div>
            </ul>
        </nav>
    </div>
            <SideMenu activator={isActive ? false: true} />
            </div>
  )
}
