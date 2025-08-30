// MenuSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuSection.css';
import KitchenPack from './images/kitchen-pack.svg';
import BarIcon from './images/bar-icon.svg'
import ArrowIcon from './images/arrow.svg'

const MenuSection = () => {
  return (
    <section className="menu">
      <div className="container">
        <h1 className='menu-text'>Меню</h1>
        <div className="menu-items">
          <Link to="/rot-bar/kitchen-area">
            <div className="items">
              <img src={KitchenPack} alt="кухонна зона" className="menu-img" />
              <h2 className="items-name">Кухня</h2>
              <img src={ArrowIcon} alt='стрілка' className='arrow-icon' />
            </div>
          </Link>
          <Link to="/rot-bar/bar-area">
            <div className="items">
              <img src={BarIcon} alt="барна зона" className="menu-img" />
              <h2 className="items-name">Бар</h2>
              <img src={ArrowIcon} alt='стрілка' className='arrow-icon' />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
