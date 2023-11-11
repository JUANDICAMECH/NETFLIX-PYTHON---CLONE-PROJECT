import '../FooterLogin/FooterLogin.css'

const FooterLogin = () => {
    return (
        <>
            <div className="container_footer">
                <div className="footer_top"><p>¿Preguntas? Llama al <a href="tel:01 800 917 1564">01 800 917 1564</a></p></div>

                <div className="container_footer_footer">
                    <p>Preguntas frecuentes</p>
                    <p>Preferencias de cookies</p>
                    <p>Centro de ayuda</p>
                    <p>Información corporativa</p>
                    <p>Términos de uso</p>
                    <p>Privacidad</p>
                </div>
            </div>
        </>
    )
};

export default FooterLogin;