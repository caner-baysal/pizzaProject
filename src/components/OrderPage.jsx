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
        <header className="header"><img src={logo} alt="Pizza Projesi Logo" className="logo" /></header>
        <main>
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
        <h4>Boyut Seç<span className="necessary">*</span></h4>
        <label>
        <input type="radio" name="size" value="küçük" onChange={handleSizeChange}/>Küçük
        </label>
        <label>
        <input type="radio" name="size" value="orta" onChange={handleSizeChange}/>Orta
        </label>
        <label>
        <input type="radio" name="size" value="büyük" onChange={handleSizeChange}/>Büyük
        </label>
        </section>
        <section className="optional-sections">
        <h4>Hamur Seç<span className="necessary">*</span></h4>
        <select className="dough-select" onChange={setDoughSelect}>
            <option value="">Hamur Kalınlığı</option>
            <option value="ince">İnce</option>
            <option value="normal">Normal</option>
            <option value="kalın">Kalın</option>
        </select>
        </section>
        <section className="optional-sections">
        <h4>Ek Malzemeler</h4>
        <ul className="list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <label>
                        <input type="checkbox" value={ingredient} onChange={handleChange}/> {ingredient}
                    </label>
                </li>
            ))}
        </ul>
        </section>
        <section>
            <p>Seçilen Malzemeler: {(selected.join(", "))}</p>
        </section>
        <section>
            <p>Sipariş Notu</p>
        <input type="text" value={orderNote} onChange={handleOrderNote}></input>
        </section>
        <section>
        <button className="btn" onClick={() => {setQuantity(quantity > 1 ? quantity - 1 : 1)}}>-</button>
        <span>{quantity}</span>
        <button className="btn" onClick={() => {setQuantity(quantity + 1)}}>+</button>
        <p>Sipariş Toplamı: {quantity * price}</p>
        <button className="btn">SİPARİŞ VER</button>
        </section>
        </main>
    </div>
    )
}
export default OrderPage;