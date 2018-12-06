import React, { Component } from 'react'

class Results extends Component {
    constructor(props) {
        super(props)

    }



    render() {
        let collection = this.props.collection
        return (
            <div className="results container flex-row">
                {collection.length > 0 ? collection.map((gif, index) => {
                    let giphy = gif.images.original.url


                    return <div className="giphy-item" key={index} ><img className='giphy-image responsive-img' cross-origin="anonymous" title={index} src={giphy} alt="gif" ></img></div>
                })

                    : collection.map((gif, index) => {

                        let giphy = gif.images.original.url



                        return <div className="giphy-item .flex-row " key={index} ><img className='giphy-image' cross-origin="anonymous" title={index} src={giphy} alt="gif" ></img></div>
                    })

                }
            </div>
        )
    }
}

export default Results;


