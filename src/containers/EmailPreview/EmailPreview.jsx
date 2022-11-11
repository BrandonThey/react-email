import EmailPreviewCard from "../../components/EmailPreviewCard/EmailPreviewCard";
import FullEmailCard from "../../components/FullEmailCard/FullEmailCard";
import "./EmailPreview.scss"
import { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
const EmailPreview = (props) => {
    const {emailsArr} = props;
    let renderedEmails;
    const [selectedFilters, setSelectedFilters] = useState()
    const [filteredEmails, setFilteredEmails] = useState(emailsArr)
    const [chosenEmail, setChosenEmail] = useState();
    const [chosenEmailIndex, setChosenEmailIndex] = useState();

    const filterItems = [
        {group: "Importance", key: "High"},
        {group: "Importance", key: "Medium"},
        {group: "Importance", key: "Low"},
        {group: "Date", key: "Most Recent"},
        {group: "Date", key: "Oldest"},
        {group: "Type", key: "Personal"},
        {group: "Type", key: "Work"}
    ]

    const selectHandler = (event) =>{
        setSelectedFilters(event)
        if(selectedFilters){
            let groups = [];
            let filters = [];
            for(let i = 0; i < selectedFilters.length; i++){
                groups.push(selectedFilters[i].group.toLowerCase())
                filters.push(selectedFilters[i].key.toLowerCase())
            }
            console.log(selectedFilters)
            console.log(selectedFilters[0].key)
            filteredEmails.map(email => {
                console.log(groups)
                console.log(filters)
                console.log(email[groups[0]]) //accessing email keys using the group categories and 
                //email[groups[0]] == filters[0]
                // console.log(email.selectedFilters[0].group.toLowerCase())
            })
            // setFilteredEmails(filteredEmails.map(email => {
            //    if(email.importance == selectedFilters[0].key){
            //     return email
            //    }
            // }))
        }
    }
    
    if(filteredEmails){
        renderedEmails = filteredEmails.map((email,index) => (
            <>
                <EmailPreviewCard userName={email.userName} header={email.header} content={email.content} setChosenEmailIndex={setChosenEmailIndex} index={index}/>
            </>
        ))
    }
    else {
        renderedEmails = emailsArr.map((email,index) => (
            <>
                <EmailPreviewCard userName={email.userName} header={email.header} content={email.content} setChosenEmailIndex={setChosenEmailIndex} index={index}/>
            </>
        ))
    }

    useEffect(() => {
        selectHandler()
    }, [selectedFilters])

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
                            options={filterItems}
                            onSelect={selectHandler}
                            onRemove={selectHandler}
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