import "./ProfileCard.css"
function ProfileCard({name, image, profession, bio}){
    return (
    <div className="profileCard">
        <img src={image} alt={name} className="profilePhoto" />
        <h1>{name}</h1>
        <h3>{profession}</h3>
        <p>{bio}</p>
    </div>
    );
}

export default ProfileCard;