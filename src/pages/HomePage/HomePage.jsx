import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import HeaderHome from "../Components/HeaderHome";




export const HomePage = (props) => {

    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        //Mỗi lần load dữ liệu component lên hoặc resize sẽ xét lại kích thước cho biến screen
        window.onload = () => {
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.onresize = () => {
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        return ()=>{
            window.removeEventListener('onload');
            window.removeEventListener('onresize');
        }
    }, [])
    console.log('screen',screen);

    let Component = props.component;
    if (props.componentMobile) {
        //Xét điều kiện để gán lại component mobile
        if(screen.width <=765){
            Component = props.componentMobile
        }
    }

    return <Route exact path={props.path} render={(propsRoute) => {//props,{path:'/',component:{HomePage},componentMobile:{HomePageMobile}}
        return <div>
           <HeaderHome/>
            <Component {...propsRoute} />
            <footer
                className="bg-dark text-white p-5 
                font-weight-bold text-center">Copy right @Cybersoft</footer>
        </div>
    }} />
}
