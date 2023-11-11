import '../ComponentsLogin/ComponentsLogin.css';
import HeaderLogin from './HeaderLogin/HeaderLogin';
import ContentLogin from './ContentLogin/ContentLogin';
import FooterLogin from './FooterLogin/FooterLogin';


const ComponentsLogin = () => {
    return (
        <>
            <section className="page_login">
                <HeaderLogin />
                <ContentLogin />
                <FooterLogin />
            </section>
        </>
    )
};

export default ComponentsLogin;
