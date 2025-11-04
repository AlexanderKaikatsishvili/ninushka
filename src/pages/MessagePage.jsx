import {useRef, useState} from "react";
import soundFile from './../assets/sweet.mp3';
import videoFile from './../assets/horse.mp4';
import beauty from './../assets/beauty.jpg';
import kartina from './../assets/kartina.jpg';
import nejnost from './../assets/nejnost.jpg';
import sonya from './../assets/sonya.jpg';
import playIcon from './../assets/play.svg';
import lightIcon from './../assets/light.svg';

export const MessagePage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const audioRef = useRef(new Audio(soundFile));
    const [count, setCount] = useState(0);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const countToShow = (e) => {
        setCount(count + 1);

        if (count >= 9) {
            e.target.style.display = 'none';
        }
    }

    const makeDark = () => {
        isDark ? setIsDark(false) : setIsDark(true);
    }

    return (
        <section className={isDark ? "page dark" : "page"}>
            <div className="page__wrapper">
                <div className="section-viewport">
                    <h1>Ура!!! Це дійсно ти!</h1>
                </div>

                <div className="section-viewport">
                    <h2 style={{display: 'flex', alignItems: 'center', gap: "1rem"}}>Увімкни для атмосфери)) <button onClick={togglePlay} className="play-btn"><img src={playIcon} alt=""/></button></h2>
                    {
                        isPlaying && <p>Ну як тобі?)</p>
                    }

                    <h2 style={{display: 'flex', alignItems: 'center'}}>Також можеш вимкнути світло для більшої романтики)

                        <button onClick={makeDark} className={isDark ? "switch-btn darken" : "switch-btn"}>
                            <img src={lightIcon} alt=""/>
                        </button>
                    </h2>
                </div>

                <div className="section-viewport">
                    <p>Ось і пройшов ще один чудовий, сповнений щастя, місяць! Я так люблю тебе! Твою посмішку, всі твої смішні сцени, локоточок зігнутий, коли свариш мене! Твою щирість та справжність! Твою радість від смачної їжі! Та невдоволення, коли я щось не розповідаю "по першому трєбованію")))</p>
                </div>

                <div className="section-viewport">
                    <h2>Якщо хочеш побачити саму круту наєздніцу, то швидко клікай по кнопці багато разів</h2>
                        <video
                            width="auto"
                            height="360"
                            controls
                            autoPlay={false}
                            muted
                            style={{display: count >= 10 ? 'block' : 'none'}}
                        >
                            <source src={videoFile} type="video/mp4"/>
                            Ваш браузер не поддерживает видео.
                        </video>

                        {count >= 10 &&
                            <p>Ти тут така смішна! Мені так подобається бачити тебе щасливою! Твій сміх - моя улюблена пісня!</p>
                        }

                    <button className="btn" onClick={countToShow}>Клікай ще хоча б {10 - count} раз</button>
                </div>

                <div className="photo-block">
                    <h2>Ти сповнюєш наш дім такою турботою та щастям!</h2>
                    <img style={{transform: `rotate(${-15 * Math.random()}deg)`}} className="photo" src={kartina} alt=""/>
                </div>

                <div className="photo-block">
                    <h2>Ти тут така ніжна та тендітна! Така жіночна!</h2>
                    <img style={{transform: `rotate(${15 * Math.random()}deg)`}} className="photo" src={nejnost} alt=""/>
                </div>

                <div className="photo-block">
                    <h2>Тут ти моя маленька сонюшка</h2>
                    <img style={{transform: `rotate(${-15 * Math.random()}deg)`}} className="photo" src={sonya} alt=""/>
                </div>

                <div className="photo-block">
                    <h2>Бути поряд з такою жінкою - неймовірне блаженство!</h2>
                    <img style={{transform: `rotate(${15 * Math.random()}deg)`}} className="photo" src={beauty} alt=""/>
                </div>

                <div className="section-viewport">
                    <p>Дякую за твою підтримку та віру в мене! Ти особлива жінка! Ти моя смішинка, вітамінка, чіта-дріта, тралі-валі, вкусняшка!</p>

                    <p>Я так хочу бути поруч з тобою кожен день мого життя! <br/> І це так неймовірно чудово входити у восьмий місяць нашого спільного шляху разом! Попри все і всіх!</p>
                </div>
            </div>
        </section>
    )
}
