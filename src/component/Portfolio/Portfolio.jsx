import React from 'react'
import style from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt'; //react-parallax-tilt


function Portfolio() {
    return (
        <div className={style.port_con}>
            <h3 className={style.port_titer}>Portfolio</h3>
            <div className={style.port_list}>
                <div className={style.port_item}>
                    <Tilt tiltReverse={true} transitionSpeed={2500} scale={1.1}>
                        <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Tilt>
                    <p>Project title</p>
                </div>
                <div className={style.port_item}>
                    <Tilt tiltReverse={true} transitionSpeed={2500} scale={1.1}>
                        <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Tilt>
                    <p>Project title</p>
                </div>
                <div className={style.port_item}>
                    <Tilt tiltReverse={true} transitionSpeed={2500} scale={1.1}>
                        <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Tilt>
                    <p>Project title</p>
                </div>
                <div className={style.port_item}>
                    <Tilt tiltReverse={true} transitionSpeed={2500} scale={1.1}>
                        <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Tilt>
                    <p>Project title</p>
                </div>
                <div className={style.port_item}>
                    <Tilt tiltReverse={true} transitionSpeed={2500} scale={1.1}>
                        <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Tilt>
                    <p>Project title</p>
                </div>
                <div className={style.port_item}>
                    <Tilt tiltReverse={true} transitionSpeed={2500} scale={1.1}>
                        <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Tilt>
                    <p>Project title</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio