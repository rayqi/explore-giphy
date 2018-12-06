import React, { Component } from 'react'
import Default from './Default'
import Gallery from 'react-photo-gallery'
import { callbackify } from 'util';

class Results extends Component {
    constructor(props) {
        super(props)

    }



    render() {
        let collection = this.props.collection
        let ratings = this.props.ratings
        let sorted = this.props.sorted



        console.log('sorted', sorted)
        let filtered = [];
        collection.length > 0 && ratings.length > 0 ? filtered = collection.filter(gif => ratings.includes(gif.rating.toUpperCase())) : filtered = collection;
        console.log('FILTERED before', filtered.map(elem => { return elem.import_datetime }))
        let sortedList;

        if (sorted === false) {
            sortedList = filtered
        } else {
            sortedList = filtered.slice().sort(function (a, b) {
                if (a.import_datetime < b.import_datetime) {
                    return 1
                }
                if (a.import_datetime > b.import_datetime) {
                    return -1
                }
                return 0
            })
        }

        let newCollection = sortedList.map((gif) => {
            return {
                src: gif.images.fixed_height.url,
                width: 3,
                height: 2
            }
        })
        return (

            // <div className="results container flex-row flex-center">
            //     {sortedList.length === 0 && this.props.searched === true ? <Default /> : sortedList.map((gif, index) => {
            //         let giphy = gif.images.fixed_height.url

            //         return <div className="giphy-item" key={index} ><img className='giphy-image responsive-img' cross-origin="anonymous" title={index} src={giphy} alt="gif" ></img></div>
            //     })}

            // </div>
            <article className="container ">
                <Gallery photos={newCollection} />
            </article>
        )
    }
}

export default Results;


