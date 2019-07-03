import React from 'react'
import { Group, Image } from 'react-konva'

export default class ImageComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: null
    }
  }

  componentDidMount() {
    this.loadImage()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.loadImage()
    }
  }

  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad)
  }

  loadImage() {
    this.image = new window.Image()
    this.image.src = this.props.src
    this.image.addEventListener('load', this.handleLoad)
  }

  handleLoad = () => {
    this.setState({ image: this.image })
  }

  render() {
    const {width, height, x, y} = this.props
    const { image } = this.state

    console.log(this.image)

    return (
        <Image width={width} height={height} image={image} x={x} />
    )
  }
}
