import React from 'react';
import { useHistory } from 'react-router-dom';
import nav1 from '../../images/iteration-2-images/icons/1.svg';
import nav2 from '../../images/iteration-2-images/icons/2.svg';
import nav3 from '../../images/iteration-2-images/icons/3.svg';
import nav4 from '../../images/iteration-2-images/icons/4.svg';
import nav5 from '../../images/iteration-2-images/icons/5.svg';
import nav6 from '../../images/iteration-2-images/icons/6.svg';

const NavigationIcons = () => {
    const history = useHistory();

    const menuItems = [
        {id: 1, icon: "korean", text: "YENİ! Kore" path: "/korean"},
        {id: 2, icon: "pizza", text: "Pizza" path: "/pizza"},
        {id: 3, icon: "burder", text: "Burger" path: "/burger"},
        {id: 4, icon: "fries", text: "Kısartmalar" path: "/fries"},
        {id: 5, icon: "fastFood", text: "Fast Food" path: "/fastfood"},
        {id: 6, icon: "spraklingDrink", text: "Gazlı İçecek" path: "/drinks"},
    ];
    const handleClick = (path) => {
        history.push(path);
    }

    return (
        <div className='container'>
            <div className='icons'>
                {menuItems.map((item) => {
                    <div key={item.id} className="icon-item" onClick={()=>{handleClick(item.path)}}>
                        <img src={item.icon} alt={item.text} className="icon-visual" />
                        <span className='icon-text'>{item.text}</span>
                    </div>
                })}
            </div>
        </div>
    )
}