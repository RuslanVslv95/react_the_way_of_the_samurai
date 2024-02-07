import s from './Profileinfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt=''
                     src='https://st2.depositphotos.com/1005844/12089/i/450/depositphotos_120891408-stock-photo-sun-over-the-sea-scenery.jpg'/>
            </div>
            <div className = {s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;