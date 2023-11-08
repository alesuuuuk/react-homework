import React from 'react'
import s from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image';
// import icons
import Instagram from '@/assets/icons/footer/Instagram_logo.svg';
import Telegram from '@/assets/icons/footer/telegram_logo.svg';
import Facebook from '@/assets/icons/footer/facebook_logo.svg';
import Call from '@/assets/icons/footer/Call.svg';
import Email from '@/assets/icons/footer/Message.svg';
import Clock from '@/assets/icons/footer/Time Circle.svg'


const footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__icons}>
        <div className={s.footer__icons_item}><Image src={Facebook} width={25} height={25} alt='facebook_icon'></Image></div>
        <div className={s.footer__icons_item}><Image src={Telegram} width={25} height={25} alt='telegram_icon'></Image></div>
        <div className={s.footer__icons_item}><Image src={Instagram} width={25} height={25} alt='inst_logo'></Image></div>
      </div>
      <div className={s.footer__logo}><div className={s.footer__logo_item}>Logo</div></div>

      <div className={s.footer__nav}>
        <div className={s.footer__navBar}>
          <div className={s.footer__navBar_item}>Товари</div>
          <div className={s.footer__navBar_item}>Про нас</div>
          <div className={s.footer__navBar_item}>Контакти</div>
          <div className={s.footer__navBar_item}>Торгові марки</div>
        </div>
        <div className={s.footer__navBar}>
          <div className={s.footer__navBar_item}>Зброя</div>
          <div className={s.footer__navBar_item}>Техніка</div>
          <div className={s.footer__navBar_item}>Електросамокати</div>
          <div className={s.footer__navBar_item}>Популярну</div>
          <div className={s.footer__navBar_item}>Акції</div>
        </div>
        <div className={s.footer__info}>
          <div className={s.footer__info_item}>
            <Image src={Call} width={20} height={20} alt='call us'/>   
            <p>+380 93 005 27 84</p>
          </div>
          <div className={s.footer__info_item}>
            mail militarystore@gmail.com
          </div>
          <div className={s.footer__info_item}>
           clock 10:00 - 22:00
          </div>
        </div>

      </div>
    </footer>
  )
}

export default footer




