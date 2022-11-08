import "./FullEmailCard.scss"

const FullEmailCard = (props) => {

    const {userName, header, content} = props;
    return (
        <>
            <p className="userName">{userName}</p>
            <h2 className="header">{header}</h2>
            <p className="content">{content}</p>
        </>
    )
}

export default FullEmailCard;