import React from 'react';
import s from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import icons
import ic_search from '@/assets/icons/header/Search.svg';
import ic_heart from '@/assets/icons/header/Heart.svg';
import ic_cart from '@/assets/icons/header/Buy.svg';


const header = () => {
  
  return (
    <div className={s.i__dont_know}>
      <header className={s.header}>
      <div className={s.logo}><Link href='/'>Logo</Link></div>
      <div className={s.search}>
        <input type="search"/>
      </div>
      <nav className={s.nav}>
        <ul>
          <li>
            <select className={s.select}>
            <option value="Товари" disabled selected >Товари</option>
            <option value="Товар-1">Товар-1</option>
            <option value="Товар-2">Товар-2</option>
            <option value="Товар-3">Товар-3</option>
            <option value="Товар-4">Товар-4</option>
            </select>
          </li>
          <li>
            <Link className={s.nav__item} href='/about'>Про нас</Link>
          </li>
          <li>
            <Link className={s.nav__item} href='#'>Контакти</Link>
          </li>
          <li>
          <select className={s.select}>
            <option value="UA">UA</option>
            {/* <option value="Pirate">Pirate</option> */}
            <option value="EN">EN</option>
          </select>
          </li>
          
          <li>

          <div className={s.cartAndFavourite}>
              <Image className={s.cartAndFavourite__icon} src={ic_heart} width={25} height={25} alt='favourite'></Image>
              <Image className={s.cartAndFavourite__icon} src={ic_cart} width={25} height={25} alt='cart'></Image>

              </div>
          </li>

          <li>
          <div className={s.account}><Link className={s.account__text} href='#'>Вхід</Link></div>
          </li>
          
        </ul>
      </nav>
    </header>
    </div>
    


  )
}

export default header
