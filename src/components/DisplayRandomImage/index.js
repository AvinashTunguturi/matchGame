import './index.css'

const DisplayRandomImage = props => {
  const {imageDetails, changeDisplayPicture} = props
  const {id, thumbnailUrl} = imageDetails

  const changePicture = () => {
    changeDisplayPicture(id)
  }

  return (
    <li className="image-item" onClick={changePicture}>
      <img alt="thumbnail" className="thumbnail-img" src={thumbnailUrl} />
    </li>
  )
}

export default DisplayRandomImage
