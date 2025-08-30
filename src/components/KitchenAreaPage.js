import React, { useState } from 'react';
import './BarAreaPage.css';
import Img from './images/IMG.png'

const KitchenAreaPage = () => {

  const [activeCategory, setActiveCategory] = useState('Перші Страви');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  
  const renderContent = () => {
    switch (activeCategory) {
      case 'Перші Страви':
        return (
          <ul>
          <li className='bar-items'><img src={Img} alt='JUNGL JUICE' className='bar-img'/>
          <ul>
            <li><p>Борщ</p></li>
          <li><p className='description-dish'>(Подається з темним хлібчиком, салом та цебулею)</p></li>
          </ul>
            <p className='price'>120₴</p>
          </li>
          <li className='bar-items'><img src={Img} alt='CLOVWR CLUB' className='bar-img'/><p>Солянка</p>
            <p className='price'>150₴</p>
          </li>
          <li className='bar-items'><img src={Img} alt='PENICILLIN' className='bar-img'/><p>Окрошка</p>
            <p className='price'>100₴</p>
          </li>
        </ul>
        );
      case 'Основні страви':
        return (
          <ul>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Деруни класичні зі сметаною</p>
        <p  className='price'>120₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Деруни з лососем</p>
        <p  className='price'>220₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Деруни з грибами</p>
        <p  className='price'>180₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/>
        <ul>
            <li><p>Chees burger</p></li>
          <li><p className='description-dish'>(Котлета, айсберг, помідор, огірки мариновані, чеддер)</p></li>
          </ul>
        <p  className='price'>220₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Сет міні бургерів</p>
        <p  className='price'>280₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Паста карбонара</p>
        <p  className='price'>160₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Паста з креветками, томатами та шпенатом</p>
        <p  className='price'>220₴</p>
        </li>
      </ul>
        );
        case 'Party Set':
        return (
          <ul>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/>
        <ul>
            <li><p>Сет фруктовий</p></li>
          <li><p className='description-dish'>(Сезонні фрукти)</p></li>
          </ul>
        <p  className='price'>150₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/>
        <ul>
            <li><p>Сет закусок</p></li>
          <li><p className='description-dish'>(Кільця цибулі, нагетси, ф-рі, домашня ковбаска)</p></li>
          </ul>
        <p  className='price'>300₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/>
        <ul>
            <li><p>Сет м'ясний</p></li>
          <li><p className='description-dish'>(Салямі, балик, шинка)</p></li>
          </ul>
        <p  className='price'>260₴</p>
        </li>
      </ul>
        );
        case 'Салати':
        return (
          <ul>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/>
        <ul>
            <li><p>Цезар з куркокую фірмовий</p></li>
          <li><p className='description-dish'>(Курка, мікс салату, бекон, чері, пармезан)</p></li>
          </ul>
        <p  className='price'>170₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/>
        <ul>
            <li><p>Салат з прошуто</p></li>
          <li><p className='description-dish'>(Рукола, дор блю, чері, грецький горіх)</p></li>
          </ul>
        <p  className='price'>200₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/>
        <ul>
            <li><p>Салат з лососем</p></li>
          <li><p className='description-dish'>(Лосось, мікс салату, філадельфія, чері, яйце)</p></li>
          </ul>
        <p  className='price'>230₴</p>
        </li>
      </ul>
        );
        case 'Закуски':
        return (
          <ul>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Нагетси 5 шт.</p>
        <p  className='price'>80₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Картопля по селянські</p>
        <p  className='price'>70₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Картопля ф-рі</p>
        <p  className='price'>70₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/>
        <ul>
            <li><p>Брускети 4 шт.</p></li>
          <li><p className='description-dish'>(З в'яленими томатами та тунцем)</p></li>
          </ul>
        <p  className='price'>180₴</p>
        </li>
        <li className='bar-items'><img src={Img} alt='APEROL SPRITZ' className='bar-img'/><p>Камамбер запечений з беконом</p>
        <p  className='price'>230₴</p>
        </li>
      </ul>
        );
      // Добавьте обработку для других категорий по аналогии
      default:
        return null;
    }
  };

  return (
    <div className='section'>
      <h2 className='section-name'>Кухня</h2>
      <div className='btn-collection'>
        <button className='bar-btn' onClick={() => handleCategoryClick('Перші Страви')}>Перші Страви</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Основні страви')}>Основні страви</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Party Set')}>Party Set</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Салати')}>Салати</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Закуски')}>Закуски</button>
        {/* Добавьте кнопки для других категорий по аналогии */}
      </div>
      <h2>{activeCategory}</h2>
      {renderContent()}
    </div>
  );
}

export default KitchenAreaPage;
