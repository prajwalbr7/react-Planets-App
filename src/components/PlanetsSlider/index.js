// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="conatiner1" data-testid="planets">
        <h1 className="heading1">PLANETS</h1>
        <div className="container2">
          <Slider {...settings}>
            {planetsList.map(eachItem => (
              <PlanetItem Details={eachItem} key={eachItem.id} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
export default PlanetsSlider
