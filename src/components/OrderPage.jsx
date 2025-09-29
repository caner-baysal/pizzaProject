import React, { useState } from "react";
import "./OrderPage.css";
import logo from '../../images/iteration-1-images/logo.svg';
import { useHistory } from "react-router-dom";
import axios from "axios";
import form_banner from '../../images/iteration-2-images/pictures/form-banner.png';
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

const OrderPage = ({orderSum, setOrderSum}) => {
    const [selected, setSelected] = useState([]);
    const [size, setSize] = useState("");
    const [doughSelect, setDoughSelect] = useState("");
    const [name, setname] = useState("");
    const [orderNote, setOrderNote] = useState("");
    const [quantity, setQuantity] = useState(1);
    const doughPrice = 85.50;
    const ingredientsPrice = selected.length * 5;
    const price = doughPrice + (selected.length * 5);
    const history = useHistory();
    const ingredients = [
        "Pepperoni", 
        "Domates", 
        "Biber", "Sosis", 
        "Mısır", "Sucuk", 
        "Kanada Jambonu", 
        "Ananas",
        "Tavuk Izgara",
        "Jalapeno", 
        "Kabak", 
        "Soğan", 
        "Sarımsak"
    ]

    const handleChange = (e) => {
        const value = e.target.value;
        if(e.target.checked) {
            setSelected([...selected, value]);
        } else {
            setSelected(selected.filter((item)=> item !== value));
            //setOrderSum({...orderSum, selected});
        }
    }
    
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }
    
    const handleDoughSelect = (e) => {
        setDoughSelect(e.target.value);
    }

    const handleName = (e) => {
        setname(e.target.value);
    }

    const handleOrderNote = (e) => {
        setOrderNote(e.target.value);
    }
    
    const handleClick = () => {
        history.push("/success")
    }
    const handleSubmit = () => {
        axios.post("https://reqres.in/api/pizza", {
            name,
            size,
            doughSelect,
            orderNote,
            selected,
        })
            .then((res) => {console.log(res)})
            .catch((err) => {console.log(err)})
    }

    return(
    <div className="container">
        <header className="header">
            <img src={logo} alt="Pizza Projesi Logo" className="logo" />
        </header>
            <img src={form_banner} alt="Pizza Projesi Banner" className="banner" />
        <main>
            <section>
                <h2>Position Absolute Acı Pizza</h2>
                <div className="rating">
                    <span className="price">{doughPrice}₺</span>
                    <span className="rating-text">4.8      (200)</span>
                </div>
                <p className="order-page">
                Frontend dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam
                sana göre. Pizza domates, peynir ve genellikle çeşitli malzemelerle kaplanmış, daha sonra geleneksel olarak odun
                ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzeta denilir.
                </p>
            </section>
            <section className="optional">
                <div className="size-select">
                    <h4 className="size-header">Boyut Seç
                        <span className="necessary">*</span>
                    </h4>
                    <label className="size">
                        <br/><input className="small" type="radio" name="size" value="büyük" onChange={handleSizeChange}/>L
                        <br/><input className="small" type="radio" name="size" value="orta" onChange={handleSizeChange}/>M
                        <br/><input className="small" type="radio" name="size" value="küçük" onChange={handleSizeChange}/>S
                    </label>
                </div>
                <div className="optional-sections">
                    <h4 className="dough-header">Hamur Seç
                        <span className="necessary">*</span>
                    </h4>
                    <select className="dough-select" onChange={handleDoughSelect}>
                        <option value="">Hamur Kalınlığı Seç</option>
                        <option value="ince">İnce</option>
                        <option value="normal">Normal</option>
                        <option value="kalın">Kalın</option>
                    </select>
                </div>
            </section>
            <section>
                <h4 className="ing-header">Ek Malzemeler</h4>
                <p  className="optional-sections">En Fazla 10 Malzeme Seçebilirsiniz. 5₺</p>
                <ul className="list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <label>
                            <input className="checkbox" type="checkbox" value={ingredient} onChange={handleChange}
                            disabled={selected.length >= 10 && !selected.includes(ingredient)}/> {ingredient}
                        </label>
                    </li>
                ))}
                </ul>
            </section>
            <section>
                <p>Seçilen Malzemeler: {(selected.join(", "))}</p>
            </section>
            <section className="username">
                <p>İsim</p>
                <input type="text" placeholder="İsim" minLength={3}/>
            </section>
            <section>
                <p className="note-header">Sipariş Notu</p>
                <input className="order-note" 
                type="text" 
                placeholder="Siparişine eklemek istediğin bir not var mı?" 
                value={orderNote} 
                onChange={handleOrderNote}></input>
            </section>
            <section className="qty-section">
                <div className="pcs">
                    <button 
                    className="btn-minus" 
                    onClick={() => {setQuantity(quantity > 1 ? quantity - 1 : 1)}}>-
                    </button>
                    <span>{quantity}</span>
                    <button className="btn-plus" onClick={() => {setQuantity(quantity + 1)}}>+</button>
                </div>
                <div className="total">
                    <p>Sipariş Toplamı</p>
                    <span className="qty">Seçimler: {ingredientsPrice}₺</span>
                    <br/><span className="subtotal">Toplam: {quantity * price}₺</span>
                    <br/><button data-cy="siparişBtn" className="btn-order" onSubmit={handleSubmit} onClick={handleClick} disabled={selected.length < 4 || !size || !doughSelect}>SİPARİŞ VER</button>
                </div>
            </section>
        </main>
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
    </div>
    )
}
export default OrderPage;