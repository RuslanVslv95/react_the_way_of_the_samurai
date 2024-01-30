import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
        <div>
          <img alt='' src = 'https://st2.depositphotos.com/1005844/12089/i/450/depositphotos_120891408-stock-photo-sun-over-the-sea-scenery.jpg'/>
        </div>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div> 
    )
}

export default Profile;