import Link from 'next/link'
import style from "../Navbar/style.module.scss"
import logo from "../Images/logo.png"
import Image from 'next/dist/client/image'
import { useState } from 'react'


export default function Navbar() {
    const [isActive,setIsActive]=useState(true);

    const ToggleMenu = () =>{
        setIsActive(!isActive)
    }
    
  return (
      
    <div className={style.Navbar}>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                    <div className={style.logo}>
                        <a><Image src={logo} layout="responsive" alt="Icona"/></a>
                    </div>
                    </Link>
                </li>

                <li className={style.RightMenu}>
                <div className={isActive? "fa-solid fa-bars":"fa-solid fa-xmark"} onClick={ToggleMenu}></div>

                </li>

            </ul>
        </nav>
    </div>
  )
}
