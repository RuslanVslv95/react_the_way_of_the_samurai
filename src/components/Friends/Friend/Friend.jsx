import { NavLink } from 'react-router-dom';
import s from './Friend.module.css'

const Friend = (props) => {

let  path= '/friends/' + props.id

    return (
        <div className={s.item}>
            <img src='https://forestandmystruggleforduelist.files.wordpress.com/2015/07/cropped-o23_11.jpg' alt="" />
            <NavLink to={path}>{props.name}</NavLink>        
        </div>
    )
}

export default Friend;