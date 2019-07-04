import React from 'react'
import { shallow } from 'enzyme'
import Logo from '../../assets/images/logo-publitas.png'
import Header from './Header'

describe('Header Component', () => {
  const wrapper = shallow(<Header />)

  it('renders correctly', () => {
    expect(wrapper.find('img').prop('src')).toEqual(Logo)
  })
})
