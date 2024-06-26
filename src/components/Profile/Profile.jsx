import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/Profileinfo/Profileinfo";
import Post from "./MyPosts/Post/Post"


const Profile = (props) => {

   
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}   
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                       />
        </div>
    )
}

export default Profile;
