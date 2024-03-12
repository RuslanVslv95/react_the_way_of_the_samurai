import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/Profileinfo/Profileinfo";
import Post from "./MyPosts/Post/Post"


const Profile = (props) => {

   
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    )
}

export default Profile;
