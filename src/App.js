import React from 'react'

import data from './config/data'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Slider from './components/slider/Slider'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <section className="container mt-5 mb-5">
          <Slider width={1110} height={400} data={data} />
        </section>
        <Footer />
      </div>
    )
  }
}
