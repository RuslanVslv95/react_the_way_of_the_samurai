
import './App.css';
import { useLayoutEffect } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends'
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import state, { addPost } from './redux/state';


function App(props) {
    return (

        <div className='app-wrapper'>
            <Header />
            <Navbar state={props.state.sidebar} />

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} updateNewMessageText ={props.updateNewMessageText} />} />
                    <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                             addPost={props.addPost}
                                                             updateNewPostText={props.updateNewPostText}/>}
                                                             />
                    <Route path='/friends' element={<Friends state={props.state.sidebar} />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </div>

    );
}

export default App;
