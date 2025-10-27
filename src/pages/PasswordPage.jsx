import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const PasswordPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const checkPassword = (e) => {
        e.preventDefault();

        if (password === "Нінушка") {
            navigate("/message");
        } else {
            setError("Нінушка, подумай ще!)")
        }
    }

    return (
        <section className="page">
            <div className="page__wrapper">
                <h1>Як тобі подобається, як я тебе називаю?</h1>
                <form action="" className="form">
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    {error && <p className="error">{error}</p>}
                    <button onClick={checkPassword}>Перевірити</button>
                </form>
            </div>
        </section>
    )
}
