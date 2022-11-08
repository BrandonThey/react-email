import EmailPreview from "../EmailPreview/EmailPreview";
import SideNav from "../SideNav/SideNav";
import "./AppDisplay.scss"
import emails from "../../data/emails";
const AppDisplay = () => {

    return(
    <section className="App-display">
        <section className="sidenav">
           <SideNav />
        </section>

        <section className="email-display">
            <EmailPreview emailsArr={emails}/>
        </section>
    </section>
    )
}

export default AppDisplay;