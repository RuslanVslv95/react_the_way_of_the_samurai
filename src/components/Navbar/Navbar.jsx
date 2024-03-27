import s from './Navbar.module.css';
import Friend from "../Friends/Friend/Friend"
import {NavLink} from "react-router-dom";


const Navbar = (props) => {

   let nameElement = props.state.friendNames.map(s => <Friend name={s.name} id={s.id} />);

    return (

        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends'>Friends</NavLink>
                {nameElement}
            </div>

        </nav>
    )
}

export default Navbar;