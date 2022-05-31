import { useState,useEffect } from "react";
import style from "../SideMenu/style.module.scss"


export default function SideMenu(props) {
    const [isActive, setActive] = useState(false);
    const [isActiveDropdown,setActiveDropdown]=useState(true);
    
    useEffect(()=> {
    setActive(props.activator)
    })
    
  return (
    <div className={style.sideWrapper}>
        <div className={isActive ? style.sideMenu : style.hideMenu}>
            <h2>Ciao!</h2>
            <h3>Di cosa hai bisogno?</h3>
        <ul>
            <button className={style.ListButtons} onClick={() =>setActiveDropdown(!isActiveDropdown)}>Ferdast's world <i className="fa fa-caret-down"></i></button>
            <div className={isActiveDropdown? style.dropdownContainer: style.dropdownContainerActive}>
                <button className={isActive? style.buttonDropdown:style.buttonNotDropdown}>Sicilia</button>
                <button className={isActive? style.buttonDropdown:style.buttonNotDropdown} >Sardegna</button>
                <button className={isActive? style.buttonDropdown:style.buttonNotDropdown}>Puglia</button>
             </div>    
            <button className={style.ListButtons}>Contact</button>
            <button className={style.ListButtons}>Privacy</button>
        </ul>
        </div>
        </div>
  )
}
