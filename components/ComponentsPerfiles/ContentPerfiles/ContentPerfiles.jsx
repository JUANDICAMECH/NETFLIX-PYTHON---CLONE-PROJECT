import '../ContentPerfiles/ContentPerfiles.css';
import HeaderLogin from '../../ComponentsLogin/HeaderLogin/HeaderLogin';
import FooterLogin from '../../ComponentsLogin/FooterLogin/FooterLogin';
import { useNavigate } from 'react-router-dom';
const ContentPerfiles =()=>{

    const navigate = useNavigate()
    const cambiarRuta = () => {
        navigate('/registro')
    }
    return(
        <>

        <div className="container_perfiles">
            <div className="container_perfiles_inter">
                <div className="card_perfil">
                    <img src="./src/assets/img/img_inicio3.png" alt="perfil" />
                    <p className='text'>Yaja</p>
                </div>
                <div className="card_perfil">
                    <img src="./src/assets/img/img_inicio3.png" alt="perfil" />
                    <p className='text'>Maracuyá</p>
                </div>
                <div className="card_perfil">
                    <img src="./src/assets/img/img_inicio3.png" alt="perfil" />
                    <p className='text'>Ester</p>
                </div>
                <div className="card_perfil">
                    <img src="./src/assets/img/img_inicio3.png" alt="perfil" />
                    <p className='text'>Juana</p>
                </div>
            </div>
            <button onClick={cambiarRuta}>Administrar perfiles</button>
            
            
            </div>       
        </>
    )
};

export default ContentPerfiles;