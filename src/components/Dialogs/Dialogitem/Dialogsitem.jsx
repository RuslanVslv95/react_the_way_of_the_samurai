import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src='https://forestandmystruggleforduelist.files.wordpress.com/2015/07/cropped-o23_11.jpg'></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;