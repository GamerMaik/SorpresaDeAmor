import { useState } from 'react';
import { Header } from '../Layouts/Header';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../Styles/GaleryStyle.css';

export function Galery() {
    // Estado para manejar la imagen seleccionada
    const [imagenPrincipal, setImagenPrincipal] = useState('src/assets/background_Login.jpg');

    // Función para actualizar la imagen principal cuando se hace clic en una miniatura
    const seleccionarImagen = (src) => {
        setImagenPrincipal(src);
    };

    return (
        <>
            <Header />
            <section>
                <div className='container-galery'>
                    <div className='photo-ofi'>
                        <img src={imagenPrincipal} alt="Imagen Principal" />
                    </div>

                    <div className='photos-container'>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img1.jpg'
                                alt="Imagen 1"
                                onClick={() => seleccionarImagen('src/assets/pictures/img1.jpg')} // Al hacer clic, cambiar la imagen principal
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img2.jpg'
                                alt="Imagen 2"
                                onClick={() => seleccionarImagen('src/assets/pictures/img2.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img3.jpg'
                                alt="Imagen 3"
                                onClick={() => seleccionarImagen('src/assets/pictures/img3.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img4.jpg'
                                alt="Imagen 4"
                                onClick={() => seleccionarImagen('src/assets/pictures/img4.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img5.jpg'
                                alt="Imagen 5"
                                onClick={() => seleccionarImagen('src/assets/pictures/img5.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img6.jpg'
                                alt="Imagen 6"
                                onClick={() => seleccionarImagen('src/assets/pictures/img6.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img7.jpg'
                                alt="Imagen 7"
                                onClick={() => seleccionarImagen('src/assets/pictures/img7.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img8.jpg'
                                alt="Imagen 8"
                                onClick={() => seleccionarImagen('src/assets/pictures/img8.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img9.jpg'
                                alt="Imagen 9"
                                onClick={() => seleccionarImagen('src/assets/pictures/img9.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img10.jpg'
                                alt="Imagen 10"
                                onClick={() => seleccionarImagen('src/assets/pictures/img10.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img11.jpg'
                                alt="Imagen 11"
                                onClick={() => seleccionarImagen('src/assets/pictures/img11.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img12.jpg'
                                alt="Imagen 12"
                                onClick={() => seleccionarImagen('src/assets/pictures/img12.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img13.jpg'
                                alt="Imagen 13"
                                onClick={() => seleccionarImagen('src/assets/pictures/img13.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img14.jpg'
                                alt="Imagen 14"
                                onClick={() => seleccionarImagen('src/assets/pictures/img14.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img15.jpg'
                                alt="Imagen 15"
                                onClick={() => seleccionarImagen('src/assets/pictures/img15.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img16.jpg'
                                alt="Imagen 16"
                                onClick={() => seleccionarImagen('src/assets/pictures/img16.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img17.jpg'
                                alt="Imagen 17"
                                onClick={() => seleccionarImagen('src/assets/pictures/img17.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img18.jpg'
                                alt="Imagen 18"
                                onClick={() => seleccionarImagen('src/assets/pictures/img18.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img19.jpg'
                                alt="Imagen 19"
                                onClick={() => seleccionarImagen('src/assets/pictures/img19.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img20.jpg'
                                alt="Imagen 20"
                                onClick={() => seleccionarImagen('src/assets/pictures/img20.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img21.jpg'
                                alt="Imagen 21"
                                onClick={() => seleccionarImagen('src/assets/pictures/img21.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img22.jpg'
                                alt="Imagen 22"
                                onClick={() => seleccionarImagen('src/assets/pictures/img22.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img23.jpg'
                                alt="Imagen 23"
                                onClick={() => seleccionarImagen('src/assets/pictures/img23.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img24.jpg'
                                alt="Imagen 24"
                                onClick={() => seleccionarImagen('src/assets/pictures/img24.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img25.jpg'
                                alt="Imagen 25"
                                onClick={() => seleccionarImagen('src/assets/pictures/img25.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img26.jpg'
                                alt="Imagen 26"
                                onClick={() => seleccionarImagen('src/assets/pictures/img26.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img27.jpg'
                                alt="Imagen 27"
                                onClick={() => seleccionarImagen('src/assets/pictures/img27.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img28.jpg'
                                alt="Imagen 28"
                                onClick={() => seleccionarImagen('src/assets/pictures/img28.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img29.jpg'
                                alt="Imagen 29"
                                onClick={() => seleccionarImagen('src/assets/pictures/img29.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img30.jpg'
                                alt="Imagen 30"
                                onClick={() => seleccionarImagen('src/assets/pictures/img30.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img31.jpg'
                                alt="Imagen 31"
                                onClick={() => seleccionarImagen('src/assets/pictures/img31.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img32.jpg'
                                alt="Imagen 32"
                                onClick={() => seleccionarImagen('src/assets/pictures/img32.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img33.jpg'
                                alt="Imagen 33"
                                onClick={() => seleccionarImagen('src/assets/pictures/img33.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img34.jpg'
                                alt="Imagen 34"
                                onClick={() => seleccionarImagen('src/assets/pictures/img34.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img35.jpg'
                                alt="Imagen 35"
                                onClick={() => seleccionarImagen('src/assets/pictures/img35.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img36.jpg'
                                alt="Imagen 36"
                                onClick={() => seleccionarImagen('src/assets/pictures/img36.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img37.jpg'
                                alt="Imagen 37"
                                onClick={() => seleccionarImagen('src/assets/pictures/img37.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img38.jpg'
                                alt="Imagen 38"
                                onClick={() => seleccionarImagen('src/assets/pictures/img38.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img39.jpg'
                                alt="Imagen 39"
                                onClick={() => seleccionarImagen('src/assets/pictures/img39.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img40.jpg'
                                alt="Imagen 40"
                                onClick={() => seleccionarImagen('src/assets/pictures/img40.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img41.jpg'
                                alt="Imagen 41"
                                onClick={() => seleccionarImagen('src/assets/pictures/img41.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img42.jpg'
                                alt="Imagen 42"
                                onClick={() => seleccionarImagen('src/assets/pictures/img42.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img43.jpg'
                                alt="Imagen 43"
                                onClick={() => seleccionarImagen('src/assets/pictures/img43.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img44.jpg'
                                alt="Imagen 44"
                                onClick={() => seleccionarImagen('src/assets/pictures/img44.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img45.jpg'
                                alt="Imagen 45"
                                onClick={() => seleccionarImagen('src/assets/pictures/img45.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img46.jpg'
                                alt="Imagen 46"
                                onClick={() => seleccionarImagen('src/assets/pictures/img46.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img47.jpg'
                                alt="Imagen 47"
                                onClick={() => seleccionarImagen('src/assets/pictures/img47.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img48.jpg'
                                alt="Imagen 48"
                                onClick={() => seleccionarImagen('src/assets/pictures/img48.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img49.jpg'
                                alt="Imagen 49"
                                onClick={() => seleccionarImagen('src/assets/pictures/img49.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img50.jpg'
                                alt="Imagen 50"
                                onClick={() => seleccionarImagen('src/assets/pictures/img50.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img51.jpg'
                                alt="Imagen 51"
                                onClick={() => seleccionarImagen('src/assets/pictures/img51.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img52.jpg'
                                alt="Imagen 52"
                                onClick={() => seleccionarImagen('src/assets/pictures/img52.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img53.jpg'
                                alt="Imagen 53"
                                onClick={() => seleccionarImagen('src/assets/pictures/img53.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img54.jpg'
                                alt="Imagen 54"
                                onClick={() => seleccionarImagen('src/assets/pictures/img54.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img55.jpg'
                                alt="Imagen 55"
                                onClick={() => seleccionarImagen('src/assets/pictures/img55.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img56.jpg'
                                alt="Imagen 56"
                                onClick={() => seleccionarImagen('src/assets/pictures/img56.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img57.jpg'
                                alt="Imagen 57"
                                onClick={() => seleccionarImagen('src/assets/pictures/img57.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img58.jpg'
                                alt="Imagen 58"
                                onClick={() => seleccionarImagen('src/assets/pictures/img58.jpg')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img59.png'
                                alt="Imagen 59"
                                onClick={() => seleccionarImagen('src/assets/pictures/img59.png')}
                            />
                        </div>
                        <div className='photo'>
                            <LazyLoadImage
                                src='src/assets/pictures/img60.png'
                                alt="Imagen 60"
                                onClick={() => seleccionarImagen('src/assets/pictures/img60.png')}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
