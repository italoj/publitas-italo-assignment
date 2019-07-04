import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer Component', () => {
  const wrapper = shallow(<Footer />)

  it('renders correctly', () => {
    const lovelyMessage = "Made with love to Publitas.com"
    const signature = "Ítalo Araújo Assignment"
    expect(wrapper.contains(lovelyMessage)).toEqual(true)
    expect(wrapper.contains(signature)).toEqual(true)
    expect(wrapper.contains("blablabla")).toEqual(false)
  })
})
