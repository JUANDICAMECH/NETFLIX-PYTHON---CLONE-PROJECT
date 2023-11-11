import '../HeaderInicio/HeaderInicio.css';

const HeaderInicio = () => {
    return (
        <>
            <nav className='navBar'>
                <div className="img">
                    <img className='logo_netflix' src="../src/assets/img/netflix.png" alt="" />
                </div>
                <div className="button">
                    <button className='eng'>English</button>
                    <button className='sign'>Sign In</button>
                </div>
            </nav>

            <div className="main">
                <h1>Películas y series ilimitadas y mucho más</h1>
                <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
                <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
                <div className="button_input">
                    <input type="text" placeholder='Email' />
                    <button>Comenzar</button>

                </div>
            </div>

        </>
    )
};

export default HeaderInicio;