import React, { Component } from 'react'

class Results extends Component {
    constructor(props) {
        super(props)

    }



    render() {
        let collection = this.props.collection
        let ratings = this.props.ratings
        let sortedList = [];
        let filtered = [];
        collection.length > 0 && ratings.length > 0 ? filtered = collection.filter(gif => ratings.includes(gif.rating.toUpperCase())) : filtered = collection;


        return (
            <div className="results container flex-row flex-center">
                {/* {collection.length > 0 && ratings.length === 0 ? collection.map((gif, index) => {
                    console.log('gif', gif)
                    let giphy = gif.images.fixed_height_small.url



                    return <div className="giphy-item" key={index} ><img className='giphy-image responsive-img' cross-origin="anonymous" title={index} src={giphy} alt="gif" ></img></div>
                })

                    : collection.filter(gif => ratings.includes(gif.rating.toUpperCase())).map((gif, index) => {

                        let giphy = gif.images.fixed_height_small.url
                        console.log(gif.title)



                        return <div className="giphy-item .flex-row " key={index} ><img className='giphy-image' cross-origin="anonymous" title={index} src={giphy} alt="gif" ></img></div>
                    })

                } */}
                {filtered.length === 0 && this.props.searched === true ? <div><img className='giphy-image responsive-img' cross-origin="anonymous" alt="gif" src="https://media.giphy.com/media/4eoO0NSdNY11K/giphy.gif"></img>SORRY, WE ARE OUT OF IMAGES. IN THE MEANTIME, LETS LISTEN TO PHOEBE UNTIL WE SEARCH AGAIN.</div> : filtered.map((gif, index) => {
                    let giphy = gif.images.fixed_height.url

                    return <div className="giphy-item" key={index} ><img className='giphy-image responsive-img' cross-origin="anonymous" title={index} src={giphy} alt="gif" ></img></div>
                })}

            </div>
        )
    }
}

export default Results;


