import '../ComponentsUsuario/ComponentsUsuario.css';
import ContentPeliculas from './ContentPeliculas/ContentPeliculas';
import FooterUsuario from './FooterUsuario/FooterUsuario';

const ComponentsUsuario =()=>{
    return(
        <>
        <div className="page_usuario">
            <ContentPeliculas/>
            <FooterUsuario/>
        </div>
        
        </>
    )
};

export default ComponentsUsuario;