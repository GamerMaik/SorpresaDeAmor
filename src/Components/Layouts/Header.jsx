import { Link } from 'react-router-dom'
export function Header(){
    return(
        <>
            <header>
                <Link to="/login" className="logo"><span>Bienvenida</span> mi amor!</Link>
                <nav>
                    <Link to="/home" className="active">Inicio</Link>
                    <Link to = "/galery">Galeria</Link>
                </nav>
            </header>
        </>
    );
}