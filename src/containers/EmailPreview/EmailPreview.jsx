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
        let holderArr = [];
        if(selectedFilters){
            //creating arrays for groupings and the filters under the groupings
            let groups = [];
            let filters = [];
            //breaking down groupings and filters from the usestate array
            for(let i = 0; i < selectedFilters.length; i++){
                groups.push(selectedFilters[i].group.toLowerCase())
                filters.push(selectedFilters[i].key.toLowerCase())
            }
        
            //finding matched groupings and filters to filter out
            filteredEmails.map(email => {
                for(let i = 0; i < selectedFilters.length; i++){
                    if(groups[i] == "date"){
                        console.log(email)
                    }
                    else if(email[groups[i]] == filters[i]){
                        holderArr.push(email)
                    }
                }
            })

            setFilteredEmails(holderArr)
        }
    }
    
    const removeHandler = () =>{
        setFilteredEmails(emailsArr)
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
                            onRemove={removeHandler}
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