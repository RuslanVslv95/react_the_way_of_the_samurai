import Friend from "./Friend/Friend";

const Friends = (props) => {

    let nameElements = props.state.friendNames.map(s => <Friend name={s.name} id={s.id} />);


    return (
        <div>
           {nameElements}
        </div>
    )
}

export default Friends;