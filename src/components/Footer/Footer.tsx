import React, { FC } from 'react';
import VkIcon from '../../assets/logo/vk-brands.svg';
import OkIcon from '../../assets/logo/odnoklassniki-square-brands.svg';

import './Footer.scss';

const Footer: FC = () => {
  return (
    <div className="app-footer">

      <div className="app-footer__info">
        <h6 className='app-footer__column-header'>Information</h6>
        <ul className='app-footer__info-list'>
          <li className='info-list__list-item'>
            <a className='info-list__link' href="#">About company</a>
          </li>
          <li className='info-list__list-item'>
            <a className='info-list__link' href="#">Contact us</a>
          </li>
          <li></li>
        </ul>
      </div>

      <div className='app-footer__socials'>
        <h6 className='app-footer__column-header'>Socials</h6>
        <ul className='app-footer__socials-list'>
          <li>
            <a href="#"><img className='footer-socials__icon' src={VkIcon} alt="vkontakte logo" /></a>
          </li>
          <li>
            <a href="#"><img className='footer-socials__icon' src={OkIcon} alt="odnoklassniki logo" /></a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Footer;