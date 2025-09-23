import React, { useState } from "react";
import "./OrderPage.css";
import logo from '../../images/iteration-1-images/logo.svg';


const OrderPage = () => {
    const [selected, setSelected] = useState([]);
    const [size, setSize] = useState("");
    const [doughSelect, setDoughSelect] = useState("");
    const [orderNote, setOrderNote] = useState("");
    const [quantity, setQuantity] = useState(1);
    const doughPrice = 85.50;
    const ingredientsPrice = selected.length * 5;
    const price = doughPrice + (selected.length * 5);
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
        }
    }
    
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }
    
    const handleDoughSelect = (e) => {
        setDoughSelect(e.target.value)
    }

    const handleOrderNote = (e) => {
        setOrderNote(e.target.value);
    }
    

    return(
    <div className="container">
        <header className="header">
            <img src={logo} alt="Pizza Projesi Logo" className="logo" />
        </header>
        <main className="main-content">
            <section>
                <h2>Position Absolute Acı Pizza</h2>
                <div className="rating">
                    <span className="price">{doughPrice}₺</span>
                    <span className="rating-text">4.8 (200)</span>
                </div>
                <p className="order-page">
                Frontend dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam
                sana göre. Pizza domates, peynir ve genellikle çeşitli malzemelerle kaplanmış, daha sonra geleneksel olarak odun
                ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzeta denilir.
                </p>
            </section>
            <section className="size-select">
                <h4 className="size-header">Boyut Seç
                    <span className="necessary">*</span>
                </h4>
                <label className="size">
                    <input type="radio" name="size" value="küçük" onChange={handleSizeChange}/>Küçük
                    <input type="radio" name="size" value="orta" onChange={handleSizeChange}/>Orta
                    <input type="radio" name="size" value="büyük" onChange={handleSizeChange}/>Büyük
                </label>
            </section>
            <section className="optional-sections">
                <h4 className="dough-header">Hamur Seç
                    <span className="necessary">*</span>
                </h4>
                <select className="dough-select" onChange={setDoughSelect}>
                    <option value="">Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalın">Kalın</option>
                </select>
            </section>
            <section>
                <h4 className="ing-header">Ek Malzemeler</h4>
                <p  className="optional-sections">En Fazla 10 Malzeme Seçebilirsiniz. 5₺</p>
                <ul className="list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <label>
                            <input type="checkbox" value={ingredient} onChange={handleChange}
                            disabled={selected.length >= 10 && !selected.includes(ingredient)}/> {ingredient}
                        </label>
                    </li>
                ))}
                </ul>
            </section>
            <section>
                <p>Seçilen Malzemeler: {(selected.join(", "))}</p>
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
                <button 
                className="btn-minus" 
                onClick={() => {setQuantity(quantity > 1 ? quantity - 1 : 1)}}>-
                </button>
                <span>{quantity}</span>
                <button className="btn-plus" onClick={() => {setQuantity(quantity + 1)}}>+</button>
            </section>
                <div className="total">
                    <p>Sipariş Toplamı</p>
                    <span className="qty">Seçimler: {ingredientsPrice}₺</span>
                </div>
                <span>Toplam: {quantity * price}₺</span>
                <div>
                    <button className="btn-order">SİPARİŞ VER</button>
                </div>
            
        </main>
    </div>
    )
}
export default OrderPage;