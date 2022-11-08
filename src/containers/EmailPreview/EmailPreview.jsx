import EmailPreviewCard from "../../components/EmailPreviewCard/EmailPreviewCard";
import FullEmailCard from "../../components/FullEmailCard/FullEmailCard";
import "./EmailPreview.scss"
import { useState } from "react";
const EmailPreview = (props) => {
    const {emailsArr} = props;

    const [chosenEmail, setChosenEmail] = useState();

    const renderedEmails = emailsArr.map((email,index) => (
        <>
            <EmailPreviewCard userName={email.userName} header={email.header} content={email.content} setChosenEmail={setChosenEmail} index={index}/>
        </>
    ))
    return(
        <section className="email-preview">
            <section className="side-email-preview">
                <section className="taskbar">
                    <button></button>
                    <button></button>
                </section>

                <section className="emailCards">
                    {renderedEmails}
                </section>
            </section>

            <section className="emailDisplay">
                {chosenEmail && <FullEmailCard userName={chosenEmail.userName} header={chosenEmail.header} content={chosenEmail.content}/>}
            </section>
        </section>
    )
}

export default EmailPreview;