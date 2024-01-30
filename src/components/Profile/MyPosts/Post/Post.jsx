import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://forestandmystruggleforduelist.files.wordpress.com/2015/07/cropped-o23_11.jpg'></img>
       {props.message}
      <div>
        <span>Like {props.likesCounter}</span>
      </div>
    </div>
  )
}

export default Post;