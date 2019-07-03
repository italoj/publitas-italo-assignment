import React from 'react'
import { Stage, Layer, Group } from 'react-konva'
import Image from './Image'

export default class Slider extends React.Component {
  renderData() {
    const { width, height, data } = this.props
    return data.map((item, index) => <Image key={`${index}`} x={width * index} src={item.url} canvasWidth={width} canvasHeight={height} />)
  }

  draggableHandler(pos) {
    const { width, data } = this.props
    const { x, y } = pos
    const maxSlideToLeft = (width * (data.length - 1) * -1)

    let newX = 0

    if (x < 0 && x <= maxSlideToLeft) {
      newX = maxSlideToLeft
    } else if (x < 0) {
      newX = x
    }

    return { x: newX, y: 0 }
  }

  render() {
    return (
      <Stage className="slider" width={this.props.width} height={this.props.height}>
        <Layer draggable={true} dragBoundFunc={this.draggableHandler.bind(this)}>
          {this.renderData()}
        </Layer>
      </Stage>
    )
  }
}
