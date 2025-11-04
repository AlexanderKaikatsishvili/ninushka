import Ninochka from './../assets/1.jpg';
import {useNavigate} from "react-router-dom";

export const WelcomePage = () => {
    const navigate = useNavigate();
    const showNextPage = () => navigate("/password");

    return (
        <section className="page" onClick={showNextPage}>
            <div className="page__wrapper">
                <h1>Привіт, моя кохана <br/> Нінушенька</h1>
                <p>Спочатку мені треба переконатись, що це точно ти 😘</p>
                <img className="photo absolute" src={Ninochka} alt=""/>
            </div>
        </section>
    )
}
