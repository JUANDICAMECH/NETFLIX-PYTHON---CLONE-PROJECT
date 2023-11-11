import HeaderRegistro from './HeaderRegistro/HeaderRegistro';
import ContentRegistro from './ContentRegistro/ContentRegistro';
import FooterRegistro from './FooterRegistro/FooterRegistro';
import '../ComponentsRegistro/ComponentsRegistro.css';



const ComponentsRegistro = () => {
    return (
        <>
            <div className="page_registro">
                <HeaderRegistro />
                <ContentRegistro/>
                <FooterRegistro />
            </div>
            
        </>
    )
}

export default ComponentsRegistro;