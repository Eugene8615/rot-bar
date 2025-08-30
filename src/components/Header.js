import React, { useState } from 'react';
import './Header.css';
import icon from './images/photo_2025-08-22_16-23-23.svg';
import icon2 from './images/burger-menu.svg';
import icon3 from './images/cross.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    // Изменяем состояние isModalOpen при клике на кнопку бургер меню
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <img src={icon} alt="Ресторанная иконка" className='logo' />
      <img
        src={icon2}
        alt="burger-menu"
        className='burger-menu'
        onClick={handleBurgerMenuClick} // Добавляем обработчик клика
      />

      {/* Модальное окно с анимацией */}
      <div className={`modal ${isModalOpen ? 'open' : ''}`}>
        {/* Здесь вы можете разместить содержимое модального окна */}
        <img src={icon} alt="Ресторанная иконка" className='logo-menu' />
        <ul className='burger-menu-list'>
          <Link to="/botanist-bar"><li className='burger-list-item'><p className='burger-menu-text'>Головна</p></li></Link>
          <Link to="/botanist-bar/kitchen-area"><li className='burger-list-item'><p className='burger-menu-text'>Кухня</p></li></Link>
          <Link to="/botanist-bar/bar-area"><li className='burger-list-item'><p className='burger-menu-text'>Бар</p></li></Link>
        </ul>
        {/* Кнопка для закрытия модального окна */}
        <img src={icon3} alt='cross' className='cross-btn' onClick={() => setIsModalOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
