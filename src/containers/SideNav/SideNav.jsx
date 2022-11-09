import "./SideNav.scss"
import { AiOutlineMail } from "react-icons/ai"
import { FaRegTrashAlt } from "react-icons/fa"
const SideNav = () => {

    return(
        <>
            <section className="inbox">
                <AiOutlineMail />
                <p>Inbox</p>
                {/* unread count */}
            </section>

            <section className="trash">
                <FaRegTrashAlt />
                <p>Trash</p>
            </section>
        </>
    )
}

export default SideNav;
