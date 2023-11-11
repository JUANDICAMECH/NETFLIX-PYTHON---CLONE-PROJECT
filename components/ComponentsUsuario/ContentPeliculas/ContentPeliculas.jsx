import '../ContentPeliculas/ContentPeliculas.css';

const ContentPeliculas = () => {
    return (
        <>
            <aside className='background--cabecera'>
                <video muted autoplay loop poster="assets/img/imagenFondoN.webp">
                    <source src="./src/assets/video/videoFondo.mp4" />
                    <img src="/src/assets/img/imagenFondoN.webp" alt="Imagen fondo de Zombieverse" />
                </video>

                <div className="cabecera">
                    <div className="menu">
                        <nav class="normal" className="scroll">
                            <ul className='navegacion navegacion--izquierda'>
                                <li className='logo'><a href="#"><img src="./src/assets/img/netflix.png" alt="Netflix" /></a></li>
                                <li><a href="#">Explorar⏷</a></li>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Series</a></li>
                                <li><a href="#">Peliculas</a></li>
                                <li><a href="#">Novedades populares</a></li>
                                <li><a href="#">Mi lista</a></li>
                            </ul>
                            <ul className='navegacion navegacion--derecha'>
                                <li><a href="#"><img src="./src/assets/img/lupa.svg" alt="Lupa" /></a></li>
                                <li><a href="#"><img class="campana" src="./src/assets/img/campana.png" alt="Icono de campana de notificaciones." /></a></li>
                                <li className='usuario'><a href="#"><img class="usuario" src="./src/assets/img/usuario.jpg" alt="Icono de usuario" /></a></li>
                                <li><a href="#">⏷</a></li>

                            </ul>

                        </nav>
                    </div>
                    <div className="imagotipo">
                        <div className="imagotipo--imagen">
                            <img src="./src/assets/img/imagLogo.webp" alt="Imagen logotipo de Zombieverse" />
                        </div>
                        <div className="imagotipo--info">
                            <p>⏵Play</p>
                            <p>ⓘ Más información</p>
                        </div>
                        <a href="#" id="toggleControls">Ocultar controles</a>
                    </div>

                </div>

            </aside>
            <main className='catalogos'>
                <section className='catalogo--peliculas'>
                    <h4 className='text_peliculas'>Películas populares</h4>
                    <div className="peliculas" id='populares'>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                    </div>
                </section>


                <section className='catalogo--peliculas'>
                    <h4 className='text_peliculas'>Películas estreno</h4>
                    <div className="peliculas" id='estreno'>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                    </div>
                </section>

                <section className='catalogo--peliculas'>
                    <h4 className='text_peliculas'>Películas más vistas</h4>
                    <div className="peliculas" id='vistas'>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                    </div>
                </section>


                <section className='catalogo--peliculas'>
                    <h4 className='text_peliculas'>Tendencias</h4>
                    <div className="peliculas" id='vistas'>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/populares.mp4"></video>
                        <video controls id="vidPopu" src="./src/assets/video/estreno.mp4"></video>
                    </div>
                </section>

            </main>


        </>

    )
}

export default ContentPeliculas;