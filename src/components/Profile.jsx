import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img alt='#' src = 'https://st2.depositphotos.com/1005844/12089/i/450/depositphotos_120891408-stock-photo-sun-over-the-sea-scenery.jpg'/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div className={s.posts}>
            <div className={s.item}>
              Post 1
            </div>
            <div className={s.item}>
              Post 2
            </div>
          </div>
        </div>
      </div> 
    )
}

export default Profile;