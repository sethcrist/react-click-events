import imageUrl from './assets/code.jpg'

const ProfilePicture = () => {

  const handleClick = (e) => e.target.style.display = "none";

  return (<img
    style={{ width: "150px" }}
    src={imageUrl}
    onClick={(e) => handleClick(e)}
  >
  </img>)
}

export default ProfilePicture