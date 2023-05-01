// Write your code here
import './index.css'

const PlanetItem = props => {
  const {Details} = props
  const {name, imageUrl, description} = Details
  return (
    <div className="container-item">
      <img src={imageUrl} alt={`planet ${name}`} className="img-sizing" />
      <h1 className="heading2">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}
export default PlanetItem
