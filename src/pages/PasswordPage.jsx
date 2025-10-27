import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const PasswordPage = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const checkPassword = (e) => {
        e.preventDefault();

        if (password === "Нінушка") {
            navigate("/");
        }
    }

    return (
        <section className="page">
            <div className="page__wrapper">
                <h1>Як тобі подобається, як я тебе називаю?</h1>
                <form action="">
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button onClick={checkPassword}>Перевірити</button>
                </form>
            </div>
        </section>
    )
}
