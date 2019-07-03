import React from 'react'
import Logo from '../../assets/images/logo-publitas.png'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container d-flex justify-content-between">
          <img src={Logo} className="logo" alt="logo" />
          <h5 className="text-primary mt-1">Ítalo Araújo - Assignment</h5>
        </div>
      </header>
    )
  }
}
