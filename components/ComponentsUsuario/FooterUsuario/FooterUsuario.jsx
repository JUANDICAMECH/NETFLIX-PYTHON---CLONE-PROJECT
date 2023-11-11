import '../FooterUsuario/FooterUsuario.css';

const FooterUsuario = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer--contenedor'>
                    <ul className='iconos'>
                        <li><a href="#"><img src="./src/assets/img/facebook.svg" alt="Icono de facebook" /></a></li>
                        <li><a href="#"><img src="./src/assets/img/instagram.svg" alt="Icono de instagram" /></a></li>
                        <li><a href="#"><img src="./src/assets/img/twitter.svg" alt="Icono de twitter" /></a></li>
                        <li><a href="#"><img src="./src/assets/img/youtube.svg" alt="Icono de youtube" /></a></li>

                    </ul>
                    <div className="informacion">
                        <p>Audio descriptivo</p>
                        <p>Centro de ayuda</p>
                        <p>Tarjetas de regalo</p>
                        <p>Prensa</p>
                        <p>Relaciones con inversionistas</p>
                        <p>Empleo</p>
                        <p>Términos de uso</p>
                        <p>Privacidad</p>
                        <p>Avisos legales</p>
                        <p>Preferencias de cookies</p>
                        <p>Información corporativa</p>
                        <p>Contactanos</p>

                    </div>
                    <p className='codigoServ'>Código de servicio</p>
                    <p className='contruccion'>© 1997-2023 Netflix, Inc.</p>

                </div>
            </footer>

        </>
    )
}

export default FooterUsuario;