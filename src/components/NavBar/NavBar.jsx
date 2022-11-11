import "./NavBar.scss"
import { GiNestedHexagons } from "react-icons/gi"
import {RiArrowDropDownLine} from "react-icons/ri"
import mainUserIcon from "../../data/main_user_icon.png"
const NavBar = () => {

    return (
        <section className="navbar">
            <section className="logo">
                <GiNestedHexagons />
                <h3>Relay.io</h3>
            </section>
            <section className="user-settings">
                <img src={mainUserIcon} alt="main user" className="mainUserThumbnail"/>
                <RiArrowDropDownLine />
            </section>
        </section>
    )
}

export default NavBar;