import React from 'react'
import { shallow } from 'enzyme'
import Slider from './Slider'

import data from '../../config/data'

describe('Slider Component', () => {
  const emptyWrapper = shallow(<Slider data={[]}/>)
  const wrapper = shallow(<Slider data={data}/>)
  const message = "Nenhuma imagem para exibir"

  it('renders message if data is empty', () => {
    expect(emptyWrapper.contains(message)).toEqual(true)
    expect(emptyWrapper.find('.slider')).toHaveLength(0)
  })

  it('renders canvas with images without empty message', () => {
    expect(wrapper.contains(message)).toEqual(false)
    expect(wrapper.find('.slider')).toHaveLength(1)
  })
})
