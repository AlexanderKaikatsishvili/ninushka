import {useRef, useState} from "react";
import soundFile from './../assets/Joe Good Girls.mp3';
import videoFile from './../assets/horse.mp4';
import beauty from './../assets/beauty.jpg';
import kartina from './../assets/kartina.jpg';
import nejnost from './../assets/nejnost.jpg';
import sonya from './../assets/sonya.jpg';

export const MessagePage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
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

    return (
        <section className="page">
            <div className="page__wrapper">
                <h1>Ура!!! Це дійсно ти!</h1>
                <h2>Увімкни для атмосфери)) <button onClick={togglePlay}>{isPlaying ? 'Stop' : 'Play'}</button></h2>
                {
                    isPlaying && <h3>Ну як тобі?)</h3>
                }

                <p>Я так люблю тебе, маленька! Твою посмішку, твій сміх! Твою щирість та справжність!</p>

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
                        <source src={videoFile} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
                    }
                </div>

                <button onClick={countToShow}>Click me</button>


                <h2>Ти сповнюєш наш дім такою турботою та щастям!</h2>
                <img style={{transform: `rotate(${-15*Math.random()}deg)`}} className="photo" src={kartina} alt=""/>

                <h2>Ти тут така ніжна та тендітна! Така жіночна!</h2>
                <img style={{transform: `rotate(${15*Math.random()}deg)`}} className="photo" src={nejnost} alt=""/>

                <h2>Тут ти моя маленька сонюшка</h2>
                <img style={{transform: `rotate(${-15*Math.random()}deg)`}} className="photo" src={sonya} alt=""/>

                <h2>Бути поряд з такою жінкою - неймовірне блаженство!</h2>
                <img style={{transform: `rotate(${15*Math.random()}deg)`}} className="photo" src={beauty} alt=""/>

            </div>
        </section>
    )
}
