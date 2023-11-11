import '../ContentLogin/ContentLogin.css'
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import FooterLogin from '../FooterLogin/FooterLogin';
import { useNavigate } from 'react-router-dom';

const ContentLogin =()=>{
    const navigate = useNavigate()
    const cambiarRuta = () => {
        navigate('/registro')
    }

    return(
        <>
        
        <div className="container_login">
            <div className="container_login_login">
               <form action=''>
               <div className="container_login_text"><p>Inicia sesión</p></div>
                <input className='container_login_input_email' type="text" placeholder='Email o número de teléfono'/>
                <input className='container_login_input_password' type="password" placeholder='Contraseña'/>
                <button className='container_login_button' type="submit" onClick={cambiarRuta}>Iniciar Sesión</button>
               </form>

               <div className="container_login_check_help">
                <label htmlFor="">
                <input type="checkbox" />
                Recuerdame
                </label>
                <p>¿Necesitas ayuda?</p>
               </div> 
               
                <div className="container_login_text1"><p>¿Primera vez en Netflix? <b>Suscríbete ahora.</b></p></div>
                <div className="container_login_text2"><p>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <a href="#">Más info.</a></p></div>
            </div>

        </div>
        
        </>
    )
};

{/* <p><Link to="register" relative="path">Suscríbete ahora.</Link></p> */}

export default ContentLogin;