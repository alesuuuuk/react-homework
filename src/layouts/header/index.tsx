import React from 'react';
// import style
import s from './Header.module.css';
import Link from 'next/link';


const header = () => {
  
  return (
    <div className={s.i__dont_know}>
      <header className={s.header}>
      <div className={s.logo}>Logo</div>
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
            <Link className={s.nav__item} href='#'>Про нас</Link>
          </li>
          <li>
            <Link className={s.nav__item} href='#'>Контакти</Link>
          </li>
          <li>
          <select className={s.select}>
            <option value="UA">UA</option>
            <option value="Pirate">Pirate</option>
            <option value="EN">EN</option>
          </select>
          </li>
          
          <li>

          <div className={s.cartAndFavourite}>
              <img className={s.cartAndFavourite__icon} src="#" alt="favourite" />
              <img className={s.cartAndFavourite__icon} src="#" alt="cart" />
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
