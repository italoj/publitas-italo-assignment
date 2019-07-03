import React from 'react'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Slider from './components/slider/Slider'

export default class App extends React.Component {
  render() {
    const data = [
      {url: "http://lorempixel.com/1200/400/"},
      {url: "http://lorempixel.com/800/200/"},
      {url: "http://lorempixel.com/400/600/"},
      {url: "http://lorempixel.com/600/400/"},
      {url: "http://lorempixel.com/800/200/"},
      {url: "http://lorempixel.com/400/600/"}
    ]

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
