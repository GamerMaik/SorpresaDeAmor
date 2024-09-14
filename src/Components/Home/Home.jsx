import { useEffect } from 'react';
import { Header } from '../Layouts/Header';
import '../../Styles/HomeStyle.css';

export function Home() {
    useEffect(() => {
        let prevMouseX = null;
        let prevMouseY = null;

        const hearth = (event) => {
            if (prevMouseX !== null && prevMouseY !== null) {
                let deltaX = event.pageX - prevMouseX;
                let deltaY = event.pageY - prevMouseY;

                let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                if (distance >= 100) {
                    createHearths(event.pageX, event.pageY);
                    prevMouseX = event.pageX;
                    prevMouseY = event.pageY;
                }
            } else {
                createHearths(event.pageX, event.pageY);
                prevMouseX = event.pageX;
                prevMouseY = event.pageY;
            }
        };

        const createHearths = (x, y) => {
            let i = document.createElement('i');
            document.body.appendChild(i);

            i.style.top = (y) + 'px';
            i.style.left = (x) + 'px';
            i.style.scale = `${Math.random() * 2 + 1}`;
            i.style.setProperty('--x', getRandomValue());
            i.style.setProperty('--y', getRandomValue());
            setTimeout(() => {
                document.body.removeChild(i);
            }, 2000);
        };

        const getRandomValue=()=>{
            return `${Math.random()*400-200}px`
        }
        // Agregar el event listener solo en la página Home
        document.addEventListener('mousemove', hearth);

        // Eliminar el event listener cuando el componente se desmonta
        return () => {
            document.removeEventListener('mousemove', hearth);
        };
    }, []); // El array vacío [] indica que este efecto se ejecuta solo al montar y desmontar

    return (
        <>
            <div className="bg-home">
                <div className="bubbles">
                <span style={{'--i':'11'}}></span>
                    <span style={{'--i':'12'}}></span>
                    <span style={{'--i':'24'}}></span>
                    <span style={{'--i':'10'}}></span>
                    <span style={{'--i':'14'}}></span>
                    <span style={{'--i':'23'}}></span>
                    <span style={{'--i':'18'}}></span>
                    <span style={{'--i':'16'}}></span>
                    <span style={{'--i':'19'}}></span>
                    <span style={{'--i':'20'}}></span>
                    <span style={{'--i':'22'}}></span>
                    <span style={{'--i':'25'}}></span>
                    <span style={{'--i':'18'}}></span>
                    <span style={{'--i':'21'}}></span>
                    <span style={{'--i':'13'}}></span>
                    <span style={{'--i':'15'}}></span>
                    <span style={{'--i':'26'}}></span>
                    <span style={{'--i':'17'}}></span>
                    <span style={{'--i':'13'}}></span>
                    <span style={{'--i':'28'}}></span>
                    <span style={{'--i':'11'}}></span>
                    <span style={{'--i':'12'}}></span>
                    <span style={{'--i':'24'}}></span>
                    <span style={{'--i':'10'}}></span>
                    <span style={{'--i':'14'}}></span>
                    <span style={{'--i':'23'}}></span>
                    <span style={{'--i':'18'}}></span>
                    <span style={{'--i':'16'}}></span>
                    <span style={{'--i':'19'}}></span>
                    <span style={{'--i':'20'}}></span>
                    <span style={{'--i':'22'}}></span>
                    <span style={{'--i':'25'}}></span>
                    <span style={{'--i':'18'}}></span>
                    <span style={{'--i':'21'}}></span>
                    <span style={{'--i':'13'}}></span>
                    <span style={{'--i':'15'}}></span>
                    <span style={{'--i':'26'}}></span>
                    <span style={{'--i':'17'}}></span>
                    <span style={{'--i':'13'}}></span>
                    <span style={{'--i':'28'}}></span>
                    <span style={{'--i':'13'}}></span>
                    <span style={{'--i':'28'}}></span>
                    <span style={{'--i':'11'}}></span>
                    <span style={{'--i':'12'}}></span>
                    <span style={{'--i':'24'}}></span>
                    <span style={{'--i':'10'}}></span>
                    <span style={{'--i':'14'}}></span>
                    <span style={{'--i':'23'}}></span>
                    <span style={{'--i':'18'}}></span>
                    <span style={{'--i':'16'}}></span>
                </div>
            </div>
            <Header />

            <section>
                <div className="content">
                    <h2>Felices <span>7</span> Meses Amor</h2>
                    <p>
                        Hoy celebramos 7 meses juntos, 7 meses que han sido los más felices de mi vida.
                        Cada día que paso a tu lado es un regalo, un nuevo motivo para amarte más y agradecer por todo lo que hemos vivido.
                        Esta página es solo una pequeña muestra del inmenso amor que siento por ti,
                        mi promesa de seguir compartiendo momentos inolvidables, y una manera de recordarte lo especial que eres para mí.
                    </p>
                </div>
            </section>
        </>
    );
}
