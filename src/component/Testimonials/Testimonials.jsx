import React from 'react'
import style from './Testimonials.module.css'

function Testimonials() {
    return (
        <div className={style.test_con}>
            <h3 className={style.test_titer}>Testimonials</h3>
            <div className={style.test_list}>
                <div className={style.test_item}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h4>John Doe</h4>
                    <p className={style.test_bio}>Web Developer</p>
                </div>
                <div className={style.test_item}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h4>Jane Doe</h4>
                    <p className={style.test_bio}>Web Developer</p>
                </div>
                <div className={style.test_item}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h4>Joe Doe</h4>
                    <p className={style.test_bio}>Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials