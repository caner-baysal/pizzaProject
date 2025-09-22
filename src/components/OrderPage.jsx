import { useState } from "react";

const OrderPage = () => {
    const [selected, setSelected] = useState([]);
    const [size, setSize] = useState("");
    const [doughSelect, setDoughSelect] = useState("");
    const [orderNote, setOrderNote] = useState("");
    const [quantity, setQuantity] = useState(1);
    const dough = 85.50;
    const price = dough + (selected.length * 5);
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
    <>
        <h1>Teknolojik Yemekler</h1>
        <h2>Position Acı Pizza</h2>
        <p>Fiyat: {dough}</p>
        <p>
        Frontend dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam
        sana göre. Pizza domates, peynir ve genellikle çeşitli malzemelerle kaplanmış, daha sonra geleneksel olarak odun
        ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
        oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzeta denilir.
        </p>
        <label>
        <input type="radio" name="size" value="küçük" onChange={handleSizeChange}/>Küçük
        </label>
        <label>
        <input type="radio" name="size" value="orta" onChange={handleSizeChange}/>Orta
        </label>
        <label>
        <input type="radio" name="size" value="büyük" onChange={handleSizeChange}/>Büyük
        </label>
        <select onChange={setDoughSelect}>
            <option value="">Hamur Kalınlığı</option>
            <option value="ince">İnce</option>
            <option value="normal">Normal</option>
            <option value="kalın">Kalın</option>
        </select>
        <h3>Ek Malzemeler</h3>
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <label>
                        <input type="checkbox" value={ingredient} onChange={handleChange}/> {ingredient}
                    </label>
                </li>
            ))}
            <p>Seçilen Malzemeler: {(selected.join(", "))}</p>
        </ul>
        <p>Sipariş Notu</p>
        <input type="text" value={orderNote} onChange={handleOrderNote}></input>
        <button onClick={() => {setQuantity(quantity > 1 ? quantity - 1 : 1)}}>-</button>
        <span>{quantity}</span>
        <button onClick={() => {setQuantity(quantity + 1)}}>+</button>
        <p>Toplam fiyat: {quantity * price}</p>
    </>
    )
}
export default OrderPage;