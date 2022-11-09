import "./NavBar.scss"
import { GiNestedHexagons } from "react-icons/gi"
const NavBar = () => {

    return (
        <section className="NavBar">
            <section className="logo">
                <GiNestedHexagons />
                <h3>Relay.io</h3>
            </section>
            <section className="user-settings">
                {/* icon */}
                {/* dropdown */}
            </section>
        </section>
    )
}

export default NavBar;