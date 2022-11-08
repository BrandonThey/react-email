import "./EmailPreviewCard.scss"

const EmailPreviewCard = (props) => {

    const {userName, header, content, setChosenEmailIndex, index} = props;

    //finding the ending of the nearest sentence to 100 characters
    const lastSentenceIndex = content?.indexOf(".", 100) + 1;

    let trimmedContent = content;
    if(lastSentenceIndex > 100){
        trimmedContent = content?.substring(0, lastSentenceIndex);
    }

    return(
            <section onClick={() => {setChosenEmailIndex(index)}} className="emailcard">
                <p className="userName">{userName}</p>
                <h4 className="Header">{header}</h4> 
                <p className="content">{trimmedContent}</p> 
            </section>      
    )
}

export default EmailPreviewCard;