import React, { Component } from 'react'
import Default from './Default'
import Gallery from 'react-photo-gallery'

class Trending extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let trendingCollection = this.props.trending
    let gifGallery = trendingCollection.map((gif) => {
      return {
        src: gif.images.fixed_height.url,
        width: 3,
        height: 2
      }
    })
    return (
      <article className="container ">
        {gifGallery.length > 0 ? <Gallery photos={gifGallery} /> : <Default />}
      </article>
    )
  }
}

export default Trending;