import React from 'react'
// import style
import s from './About.module.css'
const about = () => {
    return (
        <>
            <div className={s.history}>
                <h2 className={s.history__title}>Наша історія</h2>
                <p className={s.history__mainStory}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam iste aliquam eius, pariatur rerum expedita suscipit iusto quas dolore asperiores. Aliquid corporis ut sunt asperiores, architecto sint fugit provident!</p>
                <p className={s.history__secondStory}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam beatae quod quae voluptate nostrum ipsa placeat possimus sint inventore, molestias molestiae explicabo, tempore, ea incidunt labore. Cumque facere totam aliquam.</p>
            </div>

            <div className={s.advantages}>
                <div className={s.advantages__title}>
                    <h2>Чому вартує обрати нас?</h2>
                    <div className={s.grey__underline}></div>
                </div>
            </div>
            <div className={s.advantages__cards}>
                <div className={s.card}>
                    img
                    <h2>Сертифікована продукція</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit adipisci sequi hic deleniti? Laboriosam non, facilis dignissimos autem repellendus, voluptates alias tempore repellat numquam animi nobis iste, rerum est.</p>

                </div>
                <div className={s.card}>
                    img
                    <h2>Найкращі ціни</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum eius deleniti fugit quam nisi delectus perspiciatis similique mollitia. Dicta, expedita distinctio. Dignissimos, aperiam laborum. Rem corrupti repudiandae fugiat alias!</p>
                </div>
                <div className={s.card}>
                    img
                    <h2>Довіра</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat optio fugiat odio dignissimos consequuntur illo voluptate amet nobis assumenda facilis iusto explicabo sequi doloremque, veniam porro voluptatum! Non, iste.</p>
                </div>
            </div>

        </>
    )
}

export default about
