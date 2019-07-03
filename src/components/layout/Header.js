import React from 'react'
import Logo from '../../assets/images/logo-publitas.png'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={Logo} className="logo m-auto" alt="logo" />
      </header>
    )
  }
}
