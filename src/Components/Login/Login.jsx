import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/LoginStyle.css';

export function Login() {
    const navigate = useNavigate();

    // Estados para manejar los inputs, el mensaje y el estado del botón
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [mensaje, setMensaje] = useState('El inicio de nuestra relacion abre muchas puertas');
    const [habilitado, setHabilitado] = useState(true);
    const [contador, setContador] = useState(10);

    const verificarAcceso = () => {
        if (dia === '14' && mes === '02' && ano === '2024') {
            navigate("/home");
        } else {
            // Cambiar mensaje y deshabilitar botón por 10 segundos
            setMensaje('Me sorprende saber que te equivocaste, Intentalo nuevamente en 10 seg');
            setHabilitado(false);
            let tiempo = 10;
            const intervalo = setInterval(() => {
                tiempo -= 1;
                setContador(tiempo);
                if (tiempo === 0) {
                    clearInterval(intervalo);
                    setMensaje('El inicio de nuestra relacion abre muchas puertas');
                    setHabilitado(true);
                    setContador(10); // Reiniciar el contador
                }
            }, 1000);
        }
    };

    return (
        <>
            <section>
                <div className="leaves">
                    <div className="set">
                        <div><img src="src/assets/heart.png" className='heart' /></div>
                        <div><img src="src/assets/heart.png" className='heart' /></div>
                        <div><img src="src/assets/heart.png" className='heart' /></div>
                        <div><img src="src/assets/heart.png" className='heart' /></div>
                        <div><img src="src/assets/heart.png" className='heart' /></div>
                        <div><img src="src/assets/heart.png" className='heart' /></div>
                        <div><img src="src/assets/heart.png" className='heart' /></div>
                        <div><img src="src/assets/heart.png" className='heart' /></div>
                    </div>
                </div>
                <img src="src/assets/background_Login.jpg" className="bg" alt="background" />
                <div className="login">
                    <h2>¡SORPRESA!</h2>
                    <div className="inputBox">
                        <div className='date'>
                            <input
                                type="number"
                                placeholder='dia'
                                className='boxDate'
                                value={dia}
                                onChange={(e) => setDia(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder='mes'
                                className='boxDate'
                                value={mes}
                                onChange={(e) => setMes(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder='año'
                                className='boxDate'
                                value={ano}
                                onChange={(e) => setAno(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="inputBox">
                        <input
                            type="submit"
                            value={habilitado ? "Acceder" : `Espera ${contador} seg`}
                            id='btn'
                            onClick={verificarAcceso}
                            disabled={!habilitado}
                        />
                    </div>
                    <div className='group'>
                        <p>{mensaje}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
