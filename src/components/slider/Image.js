import React from 'react'
import { Group, Rect, Image } from 'react-konva'

export default class ImageComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: null,
      xAxis: null,
      yAxis: null
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
    this.setState({
      image: this.image,
      width: this.image.naturalWidth,
      height: this.image.naturalHeight
    })
  }

  render() {
    const { image, width, height } = this.state
    const {canvasWidth, canvasHeight, index} = this.props

    const position = canvasWidth * index
    const xAxis = (canvasWidth - width)/2 + position
    const yAxis = (canvasHeight - height)/2

    return (
      <Group>
        <Image image={image} x={xAxis} y={yAxis} />
        <Rect width={canvasWidth} height={canvasHeight} x={position} y={0} />
      </Group>
    )
  }
}
