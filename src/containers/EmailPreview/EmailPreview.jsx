import EmailPreviewCard from "../../components/EmailPreviewCard/EmailPreviewCard";
import FullEmailCard from "../../components/FullEmailCard/FullEmailCard";
import "./EmailPreview.scss"
import { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
const EmailPreview = (props) => {
    const {emailsArr} = props;

    const [chosenEmail, setChosenEmail] = useState();
    const [chosenEmailIndex, setChosenEmailIndex] = useState();

    const renderedEmails = emailsArr.map((email,index) => (
        <>
            <EmailPreviewCard userName={email.userName} header={email.header} content={email.content} setChosenEmailIndex={setChosenEmailIndex} index={index}/>
        </>
    ))

    useEffect(() => {
        setChosenEmail(emailsArr[chosenEmailIndex])
    }, [chosenEmailIndex])

    return(
        <section className="email-preview">
            <section className="side-email-preview">
                <section className="taskbar">
                    <button className="compose-btn">Compose +</button>
                    <section className="filter-dropdown">
                        <Multiselect 
                            placeholder="Filter by"
                            displayValue="key"
                            groupBy="group"
                            options={[
                                {
                                    group: "Importance",
                                    key: "High"
                                },
                                {
                                    group: "Importance",
                                    key: "Medium"
                                },
                                {
                                    group: "Importance",
                                    key: "Low"
                                },
                                {
                                    group: "Date",
                                    key: "Most Recent"
                                },
                                {
                                    group: "Date",
                                    key: "Oldest"
                                },
                                {
                                    group: "Type",
                                    key: "Personal"
                                },
                                {
                                    group: "Type",
                                    key: "Work"
                                }
                            ]}
                            showCheckbox
                        />
                    </section>
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