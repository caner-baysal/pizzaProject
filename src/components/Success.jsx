import logo from '../../images/iteration-1-images/logo.svg';
import "./Success.css";
const Success = () => {
    
    return (
        <div className='success_page'>
            <img src={logo} alt="Pizza Projesi Logo" className="logo" />
            <p className='package'>lezzetin yolda</p>
            <h1 className='success_title'>SİPRİŞİNİZ ALINDI!</h1>
        </div>
    )
}
export default Success;