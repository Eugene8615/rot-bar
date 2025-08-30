import React, { useState } from 'react';
import './BarAreaPage.css';
import JunglJuice from './images/Джангл Джус.png';
import CloverClub from './images/Кловер клаб.png';
import Penicillin from './images/Penicillin.png'
import MaiTai from './images/май тай.png';
import NoName from './images/No Name.png';
import Godfather from './images/godfather.png';
import PornstarMartini from './images/порнстармартіні.png';
import Zombi from './images/zombi.png';
import WatermelonSour from './images/watermelon.jpg';
import Bramble from './images/Brumble.png';
import AperolSpritz from './images/апероль.png';
import MartiniAsti from './images/depositphotos_174920712-stock-photo-london-uk-november-24-2017.png';
import Absolut from './images/absolutvodka700ml_1024x1024.png'
import Finlandia from './images/finlandia-05l.png'
import MartiniRoyalBsanco from './images/10459184.png'

const BarAreaPage = () => {
  const [activeCategory, setActiveCategory] = useState('COCKTAILS');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const renderContent = () => {
    switch (activeCategory) {
      case 'COCKTAILS':
        return (
          <ul>
            <li className='bar-items'><img src={JunglJuice} alt='JUNGL JUICE' className='bar-img' />
              <ul>
                <li><p>JUNGL JUICE</p></li>
                <li><p className='cocktails-item'>-Джин Finsbury</p></li>
                <li><p className='cocktails-item'>-Джин Pisang</p></li>
                <li><p className='cocktails-item'>-Сік апельсиновий</p></li>
                <li><p className='cocktails-item'>-Сік ананасовий</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>149₴</p>
            </li>
            <li className='bar-items'><img src={CloverClub} alt='CLOVWR CLUB' className='bar-img' />
              <ul>
                <li><p>CLOVER CLUB</p></li>
                <li><p className='cocktails-item'>-Альбумін</p></li>
                <li><p className='cocktails-item'>-Джин FINSBURY</p></li>
                <li><p className='cocktails-item'>-Фреш лимона</p></li>
                <li><p className='cocktails-item'>-Малиновий сироп</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>140₴</p>
            </li>
            <li className='bar-items'><img src={Penicillin} alt='PENICILLIN' className='bar-img' />
              <ul>
                <li><p>PENICILLIN</p></li>
                <li><p className='cocktails-item'>-Віскі Red Label</p></li>
                <li><p className='cocktails-item'>-Медовий сироп</p></li>
                <li><p className='cocktails-item'>-Альбумін</p></li>
                <li><p className='cocktails-item'>-Імбирний кардіал</p></li>
                <li><p className='cocktails-item'>-Лимонний фреш</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>119₴</p>
            </li>
            <li className='bar-items'><img src={MaiTai} alt='MAI TAI' className='bar-img' />
              <ul>
                <li><p>MAI TAI</p></li>
                <li><p className='cocktails-item'>-Ром Carta blanka</p></li>
                <li><p className='cocktails-item'>-Сікер Cuatro</p></li>
                <li><p className='cocktails-item'>-Сік ананасовий</p></li>
                <li><p className='cocktails-item'>-Сік лимонний</p></li>
                <li><p className='cocktails-item'>-Ром Oakhert</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>180₴</p>
            </li>
            <li className='bar-items'><img src={NoName} alt='NO NAME' className='bar-img' />
              <ul>
                <li><p>NO NAME</p></li>
                <li><p className='cocktails-item'>-Ром Oakhert</p></li>
                <li><p className='cocktails-item'>-Ром Carta blanka</p></li>
                <li><p className='cocktails-item'>-Кокосовий лікер</p></li>
                <li><p className='cocktails-item'>-Апельсиновий сік</p></li>
                <li><p className='cocktails-item'>-Банановий лікер</p></li>
                <li><p className='cocktails-item'>-Вершки</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>160₴</p>
            </li>
            <li className='bar-items'><img src={Godfather} alt='GODFATHER' className='bar-img' />
              <ul>
                <li><p>GODFHATHER</p></li>
                <li><p className='cocktails-item'>-Віскі Jack Daniels</p></li>
                <li><p className='cocktails-item'>-Мигдальний лікер</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>149₴</p>
            </li>
            <li className='bar-items'><img src={PornstarMartini} alt='PORNSTAR MARTINI' className='bar-img' />
              <ul>
                <li><p>PORNSTAR MARTINI</p></li>
                <li><p className='cocktails-item'>-Absolute Vanilla</p></li>
                <li><p className='cocktails-item'>-Ігристе</p></li>
                <li><p className='cocktails-item'>-Маракуя</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>200₴</p>
            </li>
            <li className='bar-items'><img src={Zombi} alt='ZOMBI' className='bar-img' />
              <ul>
                <li><p>ZOMBI</p></li>
                <li><p className='cocktails-item'>-Ром Oakhert</p></li>
                <li><p className='cocktails-item'>-Ром Carta Negra</p></li>
                <li><p className='cocktails-item'>-Ром Carta Blanka</p></li>
                <li><p className='cocktails-item'>-Лікер Tripl sek</p></li>
                <li><p className='cocktails-item'>-Маракуя</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>200₴</p>
            </li>
            <li className='bar-items'><img src={WatermelonSour} alt='WATERMELON SOUR' className='bar-img' />
              <ul>
                <li><p>WATERMELON SOUR</p></li>
                <li><p className='cocktails-item'>-Ром Carta Blanka</p></li>
                <li><p className='cocktails-item'>-Кавуновий лікер</p></li>
                <li><p className='cocktails-item'>-Лікер Мараскино</p></li>
                <li><p className='cocktails-item'>-Ананасовий сік</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>140₴</p>
            </li>
            <li className='bar-items'><img src={Bramble} alt='BRAMBLE' className='bar-img' />
              <ul>
                <li><p>BRAMBLE</p></li>
                <li><p className='cocktails-item'>-Лимон фреш</p></li>
                <li><p className='cocktails-item'>-Лікер ожиновий</p></li>
                <li><p className='cocktails-item'>-Джин Finsbury</p></li>
                <li><p className='cocktails-item'>-Сироп ожиновий</p></li>
                <li><p className='cocktails-item'>-Вершки</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>140₴</p>
            </li>
            <li className='bar-items'><img src={AperolSpritz} alt='APEROL SPRITZ' className='bar-img' />
              <ul>
                <li><p>APEROL SPRITZ</p></li>
                <li><p className='cocktails-item'>-Aperol</p></li>
                <li><p className='cocktails-item'>-Ігристе</p></li>
                <li><p className='cocktails-item'>-Sprite</p></li>
                <li><p>150мл</p></li>
              </ul>
              <p className='price'>160₴</p>
            </li>
          </ul>
        );
      case 'Ігристі вина':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='MARTINI ASTI' className='bar-img' /><p>MARTINI ASTI</p>
              <p className='price'>800₴</p>
            </li>
            <li className='bar-items'><img src={MartiniRoyalBsanco} alt='MARTINI ROYAL BIANCO' className='bar-img' /><p>MARTINI ROYAL BIANCO</p>
              <p className='price'>700₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='FRAGOLINO BIANCO' className='bar-img' /><p>FRAGOLINO BIANCO</p>
              <p className='price'>350₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='LATINIUM' className='bar-img' /><p>LATINIUM</p>
              <p className='price'>400₴</p>
            </li>
          </ul>
        );
      case 'Горілка':
        return (
          <ul>
            <li className='bar-items'><img src={Finlandia} alt='FINLANDIA' className='bar-img' /><p>FINLANDIA</p>
              <p className='price'>600₴</p>
            </li>
            <li className='bar-items'><img src={Absolut} alt='ABSOLUTE' className='bar-img' /><p>ABSOLUTE</p>
              <p className='price'>650₴</p>
            </li>
            <li className='bar-items bar-items2'><p>GREEN DAY</p>
              <p className='price'>220₴</p>
            </li>
            <li className='bar-items bar-items2'><p>NEMIROFF</p>
              <p className='price'>250₴</p>
            </li>
          </ul>
        );
      case 'Віскі':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='JACK DANIELS' className='bar-img' /><p>JACK DANIELS</p>
              <p className='price'>100₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='JAMESON' className='bar-img' /><p>JAMESON</p>
              <p className='price'>120₴</p>

            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='RED LABLE' className='bar-img' /><p>RED LABLE</p>
              <p className='price'>90₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='JIM BEAM' className='bar-img' /><p>JIM BEAM</p>
              <p className='price'>110₴</p>
            </li>
          </ul>
        );
      case 'Ром':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='BACARDI OAKHEART' className='bar-img' /><p>BACARDI OAKHEART</p>
              <p className='price'>75₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='CARTA NEGRA' className='bar-img' /><p>CARTA NEGRA</p>
              <p className='price'>75₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='CARTA BLANKA 75' className='bar-img' /><p>CARTA BLANKA 75</p>
              <p className='price'>75₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='CARTAIN MORGAN' className='bar-img' /><p>CARTAIN MORGAN</p>
              <p className='price'>75₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='CAPTAIN MORGAN BLACK' className='bar-img' /><p>CAPTAIN MORGAN BLACK</p>
              <p className='price'>75₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='SPICED' className='bar-img' /><p>SPICED</p>
              <p className='price'>75₴</p>
            </li>
          </ul>
        );
      case 'Коньяк':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='OLD KAKHETI' className='bar-img' /><p>OLD KAKHETI</p>
              <p className='price'>400₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='ADJARI' className='bar-img' /><p>ADJARI</p>
              <p className='price'>340₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='SHUSTOFF CHOCOLATIER' className='bar-img' /><p>SHUSTOFF CHOCOLATIER</p>
              <p className='price'>220₴</p>
            </li>
          </ul>
        );
      case 'Текіла':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='SIERRA SILVER' className='bar-img' /><p>SIERRA SILVER</p>
              <p className='price'>80₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='OLMEGA' className='bar-img' /><p>OLMEGA</p>
              <p className='price'>90₴</p>
            </li>
          </ul>
        );
      case 'Джин':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='BEEFEATER' className='bar-img' /><p>BEEFEATER</p>
              <p className='price'>90₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='FINSBURY PLATINUM' className='bar-img' /><p>FINSBURY PLATINUM</p>
              <p className='price'>90₴</p>
            </li>
          </ul>
        );
      case 'Вермут':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='MARTINI ROSSO' className='bar-img' /><p>MARTINI ROSSO</p>
              <p className='price'>100₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='MARTINI BIANCO' className='bar-img' /><p>MARTINI BIANCO</p>
              <p className='price'>100₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='MARTINI DRY' className='bar-img' /><p>MARTINI DRY</p>
              <p className='price'>90₴</p>
            </li>
          </ul>
        );
      case 'Аперетиви':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='BECHEROVKA' className='bar-img' /><p>BECHEROVKA</p>
              <p className='price'>70₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='JAGERMEISTER' className='bar-img' /><p>JAGERMEISTER</p>
              <p className='price'>90₴</p>
            </li>
          </ul>
        );
      case 'Пиво':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='CORONA EXTRA' className='bar-img' /><p>CORONA EXTRA</p>
              <p className='price'>90₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='GARAGE' className='bar-img' /><p>GARAGE</p>
              <p className='price'>60₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='HOEGAARDEN' className='bar-img' /><p>HOEGAARDEN</p>
              <p className='price'>110₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='HIKE' className='bar-img' /><p>HIKE</p>
              <p className='price'>60₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='STELLA ARTOIS' className='bar-img' /><p>STELLA ARTOIS</p>
              <p className='price'>80₴</p>
            </li>
          </ul>
        );
      case 'Безалкогольні напої':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='COCA-COLA 0.5' className='bar-img' /><p>COCA-COLA 0.5</p>
              <p className='price'>80₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='COCA-COLA 0.33' className='bar-img' /><p>COCA-COLA 0.33</p>
              <p className='price'>35₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='COCA-COLA 0.33 ж/б' className='bar-img' /><p>COCA-COLA 0.33 ж/б</p>
              <p className='price'>45₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='FANTA 0.33 ж/б' className='bar-img' /><p>FANTA 0.33 ж/б</p>
              <p className='price'>35₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='BORJOMI' className='bar-img' /><p>BORJOMI</p>
              <p className='price'>90₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='RED BULL' className='bar-img' /><p>RED BULL</p>
              <p className='price'>80₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='BON AQUA' className='bar-img' /><p>BON AQUA</p>
              <p className='price'>40₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='NON STOP' className='bar-img' /><p>NON STOP</p>
              <p className='price'>45₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='Сік в асортименті' className='bar-img' /><p>Сік в асортименті</p>
              <p className='price'>100₴</p>
            </li>
          </ul>
        );
      case 'COFFEE':
        return (
          <ul>
            <li className='bar-items'><img src={MartiniAsti} alt='ESPRESSO' className='bar-img' /><p>ESPRESSO</p>
              <p className='price'>25₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='AMERICANO' className='bar-img' /><p>AMERICANO</p>
              <p className='price'>30₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='RAFF' className='bar-img' /><p>RAFF</p>
              <p className='price'>80₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='LATTE' className='bar-img' /><p>LATTE</p>
              <p className='price'>60₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='CAPPUCHINO' className='bar-img' /><p>CAPPUCHINO</p>
              <p className='price'>40₴</p>
            </li>
            <li className='bar-items'><img src={MartiniAsti} alt='TEA' className='bar-img' /><p>TEA</p>
              <p className='price'>35₴</p>
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
      <h2 className='section-name'>Бар</h2>
      <div className='btn-collection'>
        <button className='bar-btn' onClick={() => handleCategoryClick('COCKTAILS')}>COCKTAILS</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Ігристі вина')}>Ігристі вина</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Горілка')}>Горілка</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Віскі')}>Віскі</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Ром')}>Ром</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Коньяк')}>Коньяк</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Текіла')}>Текіла</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Джин')}>Джин</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Вермут')}>Вермут</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Аперетиви')}>Аперетиви</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Пиво')}>Пиво</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('Безалкогольні напої')}>Безалкогольні напої</button>
        <button className='bar-btn' onClick={() => handleCategoryClick('COFFEE')}>COFFEE</button>
        {/* Добавьте кнопки для других категорий по аналогии */}
      </div>
      <h2>{activeCategory}</h2>
      {renderContent()}
    </div>
  );
}

export default BarAreaPage;
