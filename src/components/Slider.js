import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import grassImg from './images/2029768.png';
import slide1 from './images/photo_2023-11-11_11-00-00.jpg';
import slide2 from './images/photo_2023-11-11_11-10-53.jpg';
import slide3 from './images/photo_2023-11-11_11-11-29.jpg';
import slide4 from './images/PSX_20220216_205806.jpg';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderWrapperRef = useRef(null);

  useEffect(() => {
    const sliderWrapper = sliderWrapperRef.current;
    const items = sliderWrapper.children;

    // Клонируем первый слайд и добавляем его в конец
    const firstClone = items[0].cloneNode(true);
    sliderWrapper.appendChild(firstClone);

    const autoSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (items.length + 1)); // Учитываем клонированный слайд
    };

    // Используем эффект для настройки интервала
    const intervalId = setInterval(autoSlide, 3000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []); // Пустой массив зависимостей гарантирует, что эффект выполняется только один раз после монтирования компонента

  useEffect(() => {
    const sliderWrapper = sliderWrapperRef.current;
    const items = sliderWrapper.children;

    const translateValue = -currentIndex * items[0].offsetWidth;

    // Добавляем класс для плавного перехода между слайдами
    sliderWrapper.classList.add('transition');
    sliderWrapper.style.transform = 'translate(' + translateValue + 'px)';
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    const sliderWrapper = sliderWrapperRef.current;
    const items = sliderWrapper.children;

    // Если достигнут клон первого слайда, переходим на первый без анимации
    if (currentIndex === items.length - 1) {
      sliderWrapper.classList.remove('transition');
      sliderWrapper.style.transition = 'none';
      setCurrentIndex(0);
      sliderWrapper.style.transform = 'translate(0)';
      // Восстанавливаем анимацию
      setTimeout(() => {
        sliderWrapper.style.transition = 'transform 0.8s ease-in-out';
      }, 0);
    }
  };

  return (
    <div className="slider-container">
      <div className="grass-img-container">
        <img className="grass-img" src={grassImg} alt="" />
      </div>
      <div
        className="slider-wrapper"
        onTransitionEnd={handleTransitionEnd}
        ref={sliderWrapperRef}
      >
        <div className="slider-item">
          <img src={slide1} alt="Slide 1" />
        </div>
        <div className="slider-item">
          <img src={slide2} alt="Slide 2" />
        </div>
        <div className="slider-item">
          <img src={slide3} alt="Slide 3" />
        </div>
        <div className="slider-item">
          <img src={slide4} alt="Slide 4" />
        </div>
        {/* Добавьте нужное количество слайдов с изображениями */}
      </div>
    </div>
  );
};

export default Slider;
