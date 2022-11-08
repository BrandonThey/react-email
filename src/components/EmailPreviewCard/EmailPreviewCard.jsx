import "./EmailPreviewCard.scss"

const EmailPreviewCard = (props) => {

    const {userName, header, content, setChosenEmail, index} = props;
    return(
            <section onClick={setChosenEmail(index)} className="emailcard">
                <p className="userName">{userName}</p>
                <h4 className="Header">{header}</h4> 
                <p className="content">{content}</p>  
            </section>      
    )
}

export default EmailPreviewCard;