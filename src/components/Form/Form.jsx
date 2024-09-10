import "../Form/fromContact.css";

const Form = () => {
    return (

        <form action="" className="formContact">
            <div className="inputs">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea name="" id="" placeholder="Message"></textarea>
            </div>

            <button className="buttonContact">Send</button>
        </form>

    )
}

export default Form
