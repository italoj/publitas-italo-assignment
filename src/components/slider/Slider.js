import React from 'react'
import { Stage, Layer, Group } from 'react-konva'
import Image from './Image'

export default class Slider extends React.Component {
  renderData() {
    const { width, height, data } = this.props
    return data.map((item, index) => <Image key={`${index}`} src={item.url} canvasWidth={width} canvasHeight={height} index={index} />)
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
    if (!this.props.data || !this.props.data.length) {
      return (
        <div className="alert alert-warning text-center">
          <p>Nenhuma imagem para exibir</p>
        </div>
      )
    }

    return (
      <Stage className="slider" width={this.props.width} height={this.props.height}>
        <Layer draggable={true} dragBoundFunc={this.draggableHandler.bind(this)}>
          {this.props.data && this.renderData()}
        </Layer>
      </Stage>
    )
  }
}
