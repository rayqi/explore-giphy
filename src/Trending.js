// import React, { Component } from 'react'


// class Trending extends Component {
//     constructor(props) {
//         super(props)

//     }


//     render() {
//         let trendingCollection = this.props.collection
//         console.log('<><><><><><', trendingCollection)

//         return (
//             {
//                 trendingCollection.length === 0 ? <div><img className='giphy-image responsive-img' cross-origin="anonymous" alt="gif" src="https://media.giphy.com/media/4eoO0NSdNY11K/giphy.gif"></img>SORRY, WE ARE OUT OF IMAGES. IN THE MEANTIME, LETS LISTEN TO PHOEBE UNTIL WE SEARCH AGAIN.</div> : trendingCollection.map((gif, index) => {
//                     let giphy = gif.images.fixed_height.url

//                     return <div className="giphy-item" key={index} ><img className='giphy-image responsive-img' cross-origin="anonymous" title={index} src={giphy} alt="gif" ></img></div>
//                 })
//             }
//         )
//         // let trendingCollection = this.state.trending.slice(0, 10)
//         // console.log('****', trendingCollection)
//         // return (<div id="carousel" className="carousel carousel-slider center">

//         //     <a class="carousel-item" ><img src="https://media.giphy.com/media/xGNYX8nPHc90I/giphy.gif"></img></a>
//         //     <a class="carousel-item" ><img src="https://media.giphy.com/media/pQVai9s9AnKdW/giphy.gif"></img></a>
//         //     <a class="carousel-item" ><img src="https://media.giphy.com/media/j5XAEqNvlVY4M/giphy.gif"></img></a>
//         //     <a class="carousel-item" ><img src="https://media.giphy.com/media/1P0GHy3Yq8X7rTStOW/giphy.gif"></img></a>
//         //     <a class="carousel-item" ><img src="https://media.giphy.com/media/LPXRLrwldC6L6/giphy.gif"></img></a>
//         // </div>)
//         // return (<div></div>)
//     }
// }


// export default Trending;