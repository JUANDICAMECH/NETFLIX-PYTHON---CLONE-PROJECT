import '../ComponentsInicio/ComponentsInicio.css';
import HeaderInicio from './HeaderInicio/HeaderInicio';
import ContentInicio from './ContentInicio/ContentInicio';

const ComponentsInicio = () => {
    return (
        <>
            <div className="page_inicio">
                <HeaderInicio />
                <ContentInicio />
            </div>
        </>
    )
};

export default ComponentsInicio;