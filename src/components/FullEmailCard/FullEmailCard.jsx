import "./FullEmailCard.scss"

const FullEmailCard = (props) => {

    const {userName, header, content} = props;
    return (
        <>
            <section className="email-data">
                {/* <img /> */}

                <section className="email-address">
                    <p className="userName">{userName}</p>
                    {/* email address */}
                </section>
            </section>

            <h2 className="header">{header}</h2>
            <p className="content">{content}</p>
        </>
    )
}

export default FullEmailCard;