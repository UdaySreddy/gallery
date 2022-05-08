import './index.css'

const ThumbnailItem = props => {
  const {imagesList, imageChange} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList
  const changeImage = () => {
    imageChange(id)
  }

  return (
    <li>
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnails"
          onClick={changeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
