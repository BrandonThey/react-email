import "./FullEmailCard.scss"

const FullEmailCard = (props) => {

    const {userName, header, content} = props;
    console.log(userName, header, content)
    return (
        <>
            <p className="userName">{userName}</p>
            <h2 className="header">{header}</h2>
            <p className="content">{content}</p>
        </>
    )
}

export default FullEmailCard;