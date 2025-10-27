import {useRef, useState} from "react";
import soundFile from './../assets/Joe Good Girls.mp3';
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

        if (count >= 4) {
            e.target.style.display = 'none';
        }
    }

    const makeDark = () => {
        isDark ? setIsDark(false) : setIsDark(true);
    }

    return (
        <section className={isDark ? "page dark" : "page"}>
            <div className="page__wrapper">
                <h1>Ура!!! Це дійсно ти!</h1>
                <h2>Увімкни для атмосфери)) <button onClick={togglePlay} className="play-btn"><img src={playIcon} alt=""/></button></h2>
                {
                    isPlaying && <h3>Ну як тобі?)</h3>
                }

                <h2>Також можеш вимкнути світло для більшої романтики)

                    <button onClick={makeDark} className={isDark ? "switch-btn darken" : "switch-btn"}>
                        <img src={lightIcon} alt=""/>
                    </button>
                </h2>

                <p>Ось і пройшов ще один чудовий, сповнений щастя, місяць! Я так люблю тебе, маленька! Твою посмішку, твій сміх! Твою щирість та справжність!</p>

                <h2>Якщо хочеш побачити круту наєздніцу, то швидко клікай по кнопці багато разів</h2>
                <div>
                    {count >= 5 &&
                        <video
                            width="auto"
                            height="360"
                            controls
                            autoPlay={false}
                            muted
                        >
                            <source src={videoFile} type="video/mp4"/>
                            Ваш браузер не поддерживает видео.
                        </video>
                    }
                </div>

                <button className="btn" onClick={countToShow}>Click me</button>


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
            </div>
        </section>
    )
}
