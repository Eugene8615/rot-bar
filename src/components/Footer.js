import React from 'react';
import './footer.css'
import InstIcon  from './images/instagram-icon.svg'
import FaceBookIcon from './images/facebook-icon.svg'
import TelegramIcon from './images/telegram-icon.svg'

const Footer = () => {
  return (
    <footer>
      <div className='footer-item'>
        <ul className='icon-list'>
            <li className='footer-icon'><a href='https://www.instagram.com/botanist.bar/' target = 'blank'><img src={InstIcon} alt='inst-icon' /></a></li>
            <li className='footer-icon'><a href='https://www.facebook.com/botanist.bar/' target = 'blank'><img src={FaceBookIcon} alt='facebook-icon' /></a></li>
            <li className='footer-icon'><a href='https://t.me/botanistbar/' target = 'blank'><img src={TelegramIcon} alt='facebook-icon' /></a></li>
       </ul>
       </div>
    </footer>
  );
};

export default Footer;
