import React from 'react'
// import style
import s from "./Form.Question.module.scss"



const form = () => {
  return (
    <>
    <div className={s.form}>
        <h2 className={s.title}>Виникли запитання?</h2>
        <form className={s.form__input}>
            <input type="text" className={s.form__input_item} placeholder="Ваше ім'я" />
            <input type="number" className={s.form__input_item} placeholder="Номер телефону" />
        </form>
        <div className={s.form__send}>
            <p>Залиште заявку і ми вам передзвонимо</p>
            <button className={s.form__send_button}></button>
        </div>
    </div>
    </>
  )
}

export default form
