import React from 'react';
import logo from '../../images/iteration-1-images/logo.svg';
import home_banner from '../../images/iteration-1-images/home-banner.png';
import nav1 from '../../images/iteration-2-images/icons/1.svg';
import nav2 from '../../images/iteration-2-images/icons/2.svg';
import nav3 from '../../images/iteration-2-images/icons/3.svg';
import nav4 from '../../images/iteration-2-images/icons/4.svg';
import nav5 from '../../images/iteration-2-images/icons/5.svg';
import nav6 from '../../images/iteration-2-images/icons/6.svg';
import kart1 from '../../images/iteration-2-images/cta/kart-1.png';
import kart2 from '../../images/iteration-2-images/cta/kart-2.png';
import kart3 from '../../images/iteration-2-images/cta/kart-3.png';
import logo_footer from "../../images/iteration-2-images/footer/logo-footer.svg";
import icon_1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import icon_2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import icon_3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import li_0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import li_1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import li_2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import li_3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import li_4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import li_5 from "../../images/iteration-2-images/footer/insta/li-5.png";
import food1 from '../../images/iteration-2-images/pictures/food-1.png';
import food2 from '../../images/iteration-2-images/pictures/food-2.png';
import food3 from '../../images/iteration-2-images/pictures/food-3.png';
import "./HomePage.css";
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/order")
    }
    return (
        <>
        <div className='homepage'>
            <img data-cy="logo" src={logo} alt="Pizza Projesi Logo" className="logo"/>
            <div className='homepage-header'>
                <p className='message'>fırsatı kaçırma</p>
                <h1>KOD ACIKTIRIR<br/>PİZZA, DOYURUR</h1>
            </div>
                <button data-cy="acıktımBtn" className='btn'onClick={handleClick}>ACIKTIM</button>
                <img src={home_banner} alt="Pizza Projesi Banner" className="home_banner"/>
        </div>
        <div clasname="icons">
            <img src={nav1}/><span classname="icon-text">YENİ! Kore</span>
            <img src={nav2}/><span classname="icon-text">Pizza</span>
            <img src={nav3}/><span classname="icon-text">Burger</span>
            <img src={nav4}/><span classname="icon-text">Kızartma</span>
            <img src={nav5}/><span classname="icon-text">Fast food</span>
            <img src={nav6}/><span classname="icon-text">Gazlı İçecek</span>
        </div>
        <div class="promotion">
            <div className="lezzetus" style={{backgroundImage: "url( "+ kart1 +")"}}>
                <h3>Özel Lezzetus</h3>
                <h4>Position: Absoulte Acı Burger</h4>
                <button className='buttons'>SİPARİŞ VER</button>
            </div>
            <div className="hackathlon" style={{backgroundImage: "url( "+ kart2 +")"}}>
                <h3>Hackathlon Burger Menü</h3>
                <button className='buttons'>SİPARİŞ VER</button>
            </div>
            <div className="npm" style={{backgroundImage: "url( "+ kart3 +")"}}>
                <h3><span className='red'>Çoooook</span> hızlı npm gibi kurye</h3>
                <button className='buttons'>SİPARİŞ VER</button>
            </div>
        </div>
        <div>
                <p className='package'>en çok paketlelen menüler</p>
        </div>
        <div>
                <h3 className='bottom-header'>Acıktıran Kodlara Doyuran Lezzetler</h3>
        </div>
        <div clasname="icons">
            <img  src={nav1}/><span classname="icon-text">Ramen</span>
            <img  src={nav2}/><span classname="icon-text">Pizza</span>
            <img  src={nav3}/><span classname="icon-text">Burger</span>
            <img  src={nav4}/><span classname="icon-text">French Fries</span>
            <img  src={nav5}/><span classname="icon-text">Fast food</span>
            <img  src={nav6}/><span classname="icon-text">Soft Drinks</span>
        </div>
        <div className='food-pic'>
            <img className='food1' src={food1}/><p className='terminal'>Terminal Pizza<br/><span className='spans'>4.9 (200) 60₺</span></p>
            <img className='food2' src={food2}/><p className='position'>Position Abolute Pizza<br/><span className='spans'>4.9 (928) 85₺</span></p>
            <img className='food3' src={food3}/><p className='chicken'>useEffect Tavuklu Burger<br/><span className='spans'>4.9 (462) 75₺</span></p>
        </div>
        <footer>
            <div className="footer">
                <div className="comunication">
                    <img src={logo_footer} alt="Pizza Projesi Footer" className="orderFooter"/>
                        <br/><img className="icon_1" src={icon_1}/><span> 341 Londonderry Road, Istanbul Türkiye</span>
                        <br/><img className="icon_2" src={icon_2}/><span> aciktim@teknolojikyemekler.com</span>
                        <br/><img className="icon_3" src={icon_3}/><span>+90 216 123 45 67</span>
                </div>
                <div className="hotMenu">
                    <h4>Hot Menu</h4>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Tesler Geçti Mutlu Burger</p>
                    <p>Position Absoulte Acı Burger</p>
                </div>
                <div className="insta">
                    <h4>Instagram</h4>
                    <img src={li_0} alt="Pizza Projesi Logo" className="li" />
                    <img src={li_1} alt="Pizza Projesi Logo" className="li" />
                    <img src={li_2} alt="Pizza Projesi Logo" className="li" />
                    <img src={li_3} alt="Pizza Projesi Logo" className="li" />
                    <img src={li_4} alt="Pizza Projesi Logo" className="li" />
                    <img src={li_5} alt="Pizza Projesi Logo" className="li" />
                </div>
            </div>
        </footer>
        </>
    )
}
export default HomePage;