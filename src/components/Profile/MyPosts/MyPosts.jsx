import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
    
  <div>
    <textarea></textarea>
    <button>Add post</button>
  </div>

  <div className={s.posts}>
    <Post likesCounter='15' message='Hi, how are you?'/>
    <Post likesCounter='20' message="It's my first post"/>
    {/* <Post />
    <Post />
    <Post />
    <Post /> */}
  </div>
  </div>
  )
}

export default MyPosts;