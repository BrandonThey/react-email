import "./EmailPreviewCard.scss"

const EmailPreviewCard = (props) => {

    const {userName, header, content, setChosenEmailIndex, index} = props;
    return(
            <section onClick={() => {setChosenEmailIndex(index)}} className="emailcard">
                <p className="userName">{userName}</p>
                <h4 className="Header">{header}</h4> 
                <p className="content">{content}</p>  
            </section>      
    )
}

export default EmailPreviewCard;